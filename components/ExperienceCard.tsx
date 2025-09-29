import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Work, CalendarToday, LocationOn } from '@mui/icons-material';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  location,
  duration,
  responsibilities,
}) => {
  return (
    <Card
      sx={{
        mb: 4,
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
          <Work color="primary" sx={{ fontSize: 28, mt: 0.5 }} />
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
                mb: 1,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              component="h4"
              sx={{
                fontWeight: 500,
                color: 'text.primary',
                mb: 2,
              }}
            >
              {company}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarToday sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {duration}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <LocationOn sx={{ fontSize: 16, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  {location}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Typography
          variant="h6"
          component="h5"
          sx={{
            fontWeight: 500,
            color: 'text.primary',
            mb: 2,
          }}
        >
          Key Achievements:
        </Typography>
        <List sx={{ pl: 0 }}>
          {responsibilities.map((responsibility, index) => (
            <ListItem key={index} sx={{ pl: 0, pb: 1 }}>
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.primary',
                      lineHeight: 1.6,
                      '&::before': {
                        content: '"•"',
                        color: 'primary.main',
                        fontWeight: 'bold',
                        marginRight: 1,
                      },
                    }}
                  >
                    {responsibility}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
