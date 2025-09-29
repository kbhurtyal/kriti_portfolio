import React from 'react';
import {
  Box,
  Typography,
  Chip,
  Paper,
} from '@mui/material';
import {
  Code,
  Build,
  Analytics,
} from '@mui/icons-material';
import Section from './Section';

const skillsData = [
  {
    category: 'Programming Languages',
    icon: <Code color="primary" sx={{ fontSize: 28 }} />,
    skills: ['Python', 'Java', 'JavaScript', 'C++', 'SQL', 'HTML/CSS', 'Bash'],
    color: 'primary' as const,
  },
  {
    category: 'Frameworks & Tools',
    icon: <Build color="secondary" sx={{ fontSize: 28 }} />,
    skills: ['Flask', 'Express.js', 'Databricks', 'Airflow', 'Tableau', 'Firebase', 'AWS', 'MongoDB', 'React', 'Git'],
    color: 'secondary' as const,
  },
  {
    category: 'Specialties',
    icon: <Analytics color="success" sx={{ fontSize: 28 }} />,
    skills: ['ETL Pipelines', 'API Development', 'Data Visualization', 'OWASP Security Testing', 'Unit Testing'],
    color: 'success' as const,
  },
];

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(auto-fit, minmax(300px, 1fr))',
          },
          gap: 4,
        }}
      >
        {skillsData.map((skillGroup, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 4,
              height: '100%',
              transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              {skillGroup.icon}
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                {skillGroup.category}
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              {skillGroup.skills.map((skill, skillIndex) => (
                <Chip
                  key={skillIndex}
                  label={skill}
                  color={skillGroup.color}
                  variant="filled"
                  sx={{
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    py: 2,
                    px: 1,
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    },
                  }}
                />
              ))}
            </Box>
          </Paper>
        ))}
      </Box>
    </Section>
  );
};

export default Skills;
