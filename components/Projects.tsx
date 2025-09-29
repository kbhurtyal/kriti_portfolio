import React from 'react';
import { Box } from '@mui/material';
import Section from './Section';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'VulneraScan',
    description: 'A comprehensive Flask-based vulnerability scanner designed to detect SQLi, XSS, and CSRF threats in real time, integrating OWASP testing methodologies for enhanced security analysis.',
    technologies: ['Python', 'Flask', 'SQL', 'OWASP', 'API Integration'],
    achievements: [
      'Engineered a Flask-based vulnerability scanner detecting SQLi, XSS, and CSRF threats in real time, integrating OWASP testing methodologies',
      'Developed REST APIs to connect the scanner with external threat intelligence feeds and dashboards, reducing manual triage time by 25%',
      'Automated defect triaging with Python and SQL, logging 50+ high-priority cases and improving detection accuracy by 30%',
    ],
  },
  {
    title: 'User Insights Dashboard',
    description: 'An end-to-end data analytics solution featuring ETL pipelines and interactive dashboards to consolidate multi-source event data for real-time business intelligence.',
    technologies: ['Python', 'Pandas', 'Tableau', 'SQL', 'Airflow', 'Databricks'],
    achievements: [
      'Designed and orchestrated end-to-end ETL pipelines in Airflow and Databricks to consolidate multi-source event data for real-time analytics',
      'Applied advanced data transformation with Pandas and SQL, improving reporting accuracy by 35%',
      'Developed interactive Tableau dashboards with drill-down capabilities, enabling tracking of engagement KPIs and driving a 15% increase in user retention',
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Projects" backgroundColor="background.default">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: 'repeat(2, 1fr)',
          },
          gap: 4,
        }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            achievements={project.achievements}
          />
        ))}
      </Box>
    </Section>
  );
};

export default Projects;
