import React from 'react';
import { Box, Container, Typography } from '@mui/material';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  py?: number;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  backgroundColor = 'transparent',
  py = 8,
}) => {
  return (
    <Box
      id={id}
      component="section"
      sx={{
        py,
        backgroundColor,
        minHeight: title ? 'auto' : '100vh',
        display: 'flex',
        alignItems: title ? 'flex-start' : 'center',
      }}
    >
      <Container maxWidth="lg">
        {title && (
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
};

export default Section;
