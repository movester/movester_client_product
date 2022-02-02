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
import Profile from './pages/Profile';
import PwChange from './pages/PwChange';
import Account from './pages/Account';
import Record from './pages/Record';
import Basket from './pages/Basket';
import Stamp from './pages/Stamp';
import Shoulder from './pages/Shoulder';
import WaistLeg from './pages/WaistLeg';

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
        <Route path="/mypage/profile" element={<Profile />} />
        <Route path="/mypage/profile/PwChange" element={<PwChange />} />
        <Route path="/mypage/profile/account" element={<Account />} />
        <Route path="/mypage/basket" element={<Basket />} />
        <Route path="/mypage/stamp" element={<Stamp />} />
        <Route path="/mypage/record" element={<Record />} />
        <Route path="/mypage/record/shoulder" element={<Shoulder />} />
        <Route path="/mypage/record/waistLeg" element={<WaistLeg />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
