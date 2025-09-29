import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Fade,
  Zoom,
} from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import Section from './Section';

const Header: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:kriti@example.com';
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/kriti', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/kriti-bhurtyal-55b049377/', '_blank');
  };

  return (
    <Section id="home">
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            minHeight: '100vh',
            gap: 4,
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box sx={{ flex: 2 }}>
            <Fade in timeout={1000}>
              <Box>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    mb: 2,
                    background: 'linear-gradient(45deg, #1976d2, #dc004e)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800,
                  }}
                >
                  Kriti
                </Typography>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{
                    mb: 3,
                    color: 'text.primary',
                    fontWeight: 500,
                  }}
                >
                  Software Engineer
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    maxWidth: '600px',
                  }}
                >
                  Full-stack software engineer specializing in Python, React, and cloud technologies. 
                  Passionate about building scalable solutions and optimizing system performance.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Zoom in timeout={1200}>
                    <Button
                      variant="contained"
                      size="large"
                      startIcon={<Email />}
                      onClick={handleEmailClick}
                      sx={{
                        py: 1.5,
                        px: 3,
                        fontSize: '1.1rem',
                      }}
                    >
                      Contact Me
                    </Button>
                  </Zoom>
                  <Zoom in timeout={1400}>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<GitHub />}
                      onClick={handleGitHubClick}
                      sx={{
                        py: 1.5,
                        px: 3,
                        fontSize: '1.1rem',
                      }}
                    >
                      GitHub
                    </Button>
                  </Zoom>
                  <Zoom in timeout={1600}>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<LinkedIn />}
                      onClick={handleLinkedInClick}
                      sx={{
                        py: 1.5,
                        px: 3,
                        fontSize: '1.1rem',
                      }}
                    >
                      LinkedIn
                    </Button>
                  </Zoom>
                </Box>
              </Box>
            </Fade>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Zoom in timeout={800}>
              <Box
                sx={{
                  width: '100%',
                  height: '400px',
                  background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 20px 40px rgba(25, 118, 210, 0.3)',
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'white',
                    fontWeight: 300,
                    textAlign: 'center',
                  }}
                >
                  Profile Image
                  <br />
                  Placeholder
                </Typography>
              </Box>
            </Zoom>
          </Box>
        </Box>
      </Container>
    </Section>
  );
};

export default Header;
