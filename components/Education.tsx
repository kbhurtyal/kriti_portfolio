import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { School, CalendarToday } from '@mui/icons-material';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education" backgroundColor="background.default">
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          sx={{
            maxWidth: 800,
            width: '100%',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
              <School color="primary" sx={{ fontSize: 32, mt: 0.5 }} />
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h4"
                  component="h3"
                  sx={{
                    fontWeight: 600,
                    color: 'primary.main',
                    mb: 1,
                  }}
                >
                  University of North Carolina at Charlotte
                </Typography>
                <Typography
                  variant="h5"
                  component="h4"
                  sx={{
                    fontWeight: 500,
                    color: 'text.primary',
                    mb: 2,
                  }}
                >
                  Bachelor of Science in Computer Science
                </Typography>
                <Typography
                  variant="h6"
                  component="h5"
                  sx={{
                    fontWeight: 400,
                    color: 'text.secondary',
                    mb: 3,
                  }}
                >
                  Minor: Criminal Justice
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <CalendarToday color="action" sx={{ fontSize: 20 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 500,
                      color: 'text.primary',
                    }}
                  >
                    May 2024
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      color: 'text.secondary',
                    }}
                  >
                    Location:
                  </Typography>
                  <Chip
                    label="Charlotte, NC"
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Section>
  );
};

export default Education;
