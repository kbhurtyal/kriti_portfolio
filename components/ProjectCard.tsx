import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Code, TrendingUp } from '@mui/icons-material';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  achievements,
}) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 16px 32px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
          <Code color="primary" sx={{ fontSize: 28, mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                mb: 2,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                lineHeight: 1.6,
                mb: 3,
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            component="h4"
            sx={{
              fontWeight: 500,
              color: 'text.primary',
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <TrendingUp color="secondary" sx={{ fontSize: 20 }} />
            Key Achievements:
          </Typography>
          <List sx={{ pl: 0 }}>
            {achievements.map((achievement, index) => (
              <ListItem key={index} sx={{ pl: 0, py: 0.5 }}>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.primary',
                        lineHeight: 1.5,
                        '&::before': {
                          content: '"•"',
                          color: 'secondary.main',
                          fontWeight: 'bold',
                          marginRight: 1,
                        },
                      }}
                    >
                      {achievement}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ mt: 'auto' }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 500,
              color: 'text.primary',
              mb: 2,
            }}
          >
            Technologies Used:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                size="small"
                color="primary"
                variant="outlined"
                sx={{
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white',
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
