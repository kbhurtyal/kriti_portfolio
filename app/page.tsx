'use client';

import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Toolbar />
      <Header />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </Box>
  );
}
