import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import Stretching from './pages/Stretching';
import Event from './pages/Event';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Profill from './pages/Profill';
import PwChange from './pages/PwChange';
import UserDelete from './pages/UserDelete';
import Record from './pages/Record';
import Basket from './pages/Basket';

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
        <Route path="/profill" element={<Profill />} />
        <Route path="/profill/PwChange" element={<PwChange />} />
        <Route path="/profill/userDelete" element={<UserDelete />} />
        <Route path="/profill/record" element={<Record />} />
        <Route path="/profill/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
