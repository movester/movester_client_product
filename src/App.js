import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/utils/Header';
import Footer from './components/utils/Footer';

import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Stretching from './pages/Stretching';
import Event from './pages/Event';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stretching" element={<Stretching />} />
        <Route path="/event" element={<Event />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<SignupPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
