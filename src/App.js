import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import theme from './theme';
import Home from './pages/Home';
import About from './pages/About';
import StretchingList from './pages/StretchingList';
import StretchingDetail from './pages/StretchingDetail';
import Event from './pages/Event';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import EmailAuthPage from './pages/EmailAuthPage'
import Profile from './pages/Profile';
import PwChange from './pages/PwChange';
import Account from './pages/Account';
import Record from './pages/Record';
import Basket from './pages/Basket';
import Stamp from './components/stamp/Stamp';
import FindPasswordPage from './pages/FindPasswordPage';
import EditPasswordPage from './pages/EditPasswordPage';
import Shoulder from './pages/Shoulder';
import WaistLeg from './pages/WaistLeg';
import NotPound from './pages/NotPound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stretching" element={<StretchingList />} />
        <Route path="/stretching/detail" element={<StretchingDetail />} />
        <Route path="/event" element={<Event />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/login/accountInfoFound" element={<FindPasswordPage />} />
        <Route path="/login/accountInfoEdited" element={<EditPasswordPage />} />
        <Route path="/join" element={<SignUpPage />} />
        <Route path="/emailAuth/:userIdx" element={<EmailAuthPage />} />
        <Route path="/mypage/profile" element={<Profile />} />
        <Route path="/mypage/profile/PwChange" element={<PwChange />} />
        <Route path="/mypage/profile/account" element={<Account />} />
        <Route path="/mypage/basket" element={<Basket />} />
        <Route path="/mypage/stamp" element={<Stamp />} />
        <Route path="/mypage/record" element={<Record />} />
        <Route path="/mypage/record/shoulder" element={<Shoulder />} />
        <Route path="/mypage/record/waistLeg" element={<WaistLeg />} />
        <Route path="*" element={<NotPound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
