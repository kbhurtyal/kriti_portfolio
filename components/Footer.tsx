import React from 'react';
import {
  Box,
  Typography,
  Container,
  Button,
  Divider,
} from '@mui/material';
import { Email, GitHub, LinkedIn, ArrowUpward } from '@mui/icons-material';

const Footer: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:kriti@example.com';
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/kriti', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/kriti-bhurtyal-55b049377/', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      id="contact"
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: 4,
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
              }}
            >
              Let&apos;s Connect
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                maxWidth: 400,
                lineHeight: 1.6,
              }}
            >
              I&apos;m always interested in new opportunities and collaborations.
              Feel free to reach out if you&apos;d like to discuss technology, projects, or potential partnerships.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Email />}
                onClick={handleEmailClick}
                sx={{
                  py: 1,
                  px: 2,
                }}
              >
                Email Me
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHub />}
                onClick={handleGitHubClick}
                sx={{
                  py: 1,
                  px: 2,
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                  },
                }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<LinkedIn />}
                onClick={handleLinkedInClick}
                sx={{
                  py: 1,
                  px: 2,
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'white',
                  },
                }}
              >
                LinkedIn
              </Button>
            </Box>
          </Box>
          
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              startIcon={<ArrowUpward />}
              onClick={scrollToTop}
              sx={{
                py: 1,
                px: 3,
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'white',
                },
              }}
            >
              Back to Top
            </Button>
          </Box>
        </Box>
        
        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(255, 255, 255, 0.7)',
            }}
          >
            © {new Date().getFullYear()} Kriti. Built with Next.js and Material UI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
