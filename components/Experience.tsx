import React from 'react';
import Section from './Section';
import ExperienceCard from './ExperienceCard';

const experienceData = [
  {
    title: 'Software Engineering Intern (Platform Optimization)',
    company: 'ScentAir Technologies LLC',
    location: 'Charlotte, NC',
    duration: 'May 2024 – Dec 2024',
    responsibilities: [
      'Developed Python, Bash, and SQL-based diagnostic scripts on AWS, reducing system downtime by 12% and improving platform stability.',
      'Streamlined troubleshooting of data inconsistencies by collaborating with engineers across AWS and SQL pipelines, cutting recurring errors by 30% and accelerating resolution time.',
      'Built an interactive React dashboard to monitor system health and API performance in real time, enabling faster root-cause analysis and reducing resolution time by 20%.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'ScentAir Technologies LLC',
    location: 'Charlotte, NC',
    duration: 'May 2023 – May 2024',
    responsibilities: [
      'Optimized backend APIs for IoT diffuser platform by redesigning SQL queries and implementing caching strategies, reducing latency by 700ms across 8K+ daily requests.',
      'Led enhancements to a Java-based scheduling system using multithreading and concurrency controls, reducing processing time by 20% and boosting task completion rates across three global markets.',
      'Diagnosed and resolved 15+ integration defects using logging and AWS monitoring tools, decreasing support tickets by 16% and achieving 99.9% uptime.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Amtev',
    location: 'Seattle, WA',
    duration: 'May 2022 – May 2023',
    responsibilities: [
      'Re-architected a legacy web app with React.js and optimized state management, reducing bounce rate by 20% and improving load times.',
      'Developed an AI-driven chatbot with Python and NLP libraries to automate marketing workflows, cutting manual workload by 40%.',
      'Built full-stack features including ETL pipelines (Python, SQL, Tableau) and an e-commerce module (React, Express.js, MongoDB), reducing data prep time by 40% and improving product adoption by 60%.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Experience">
      {experienceData.map((experience, index) => (
        <ExperienceCard
          key={index}
          title={experience.title}
          company={experience.company}
          location={experience.location}
          duration={experience.duration}
          responsibilities={experience.responsibilities}
        />
      ))}
    </Section>
  );
};

export default Experience;
