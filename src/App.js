import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import theme from './theme';
import IndexPage from './pages/IndexPage';
import About from './pages/About';

import StretchingListPage from './pages/stretching/StretchingListPage';
import StretchingDetailPage from './pages/stretching/StretchingDetailPage';

import Event from './pages/Event';
import SignInPage from './pages/sign/SignInPage';
import SignUpPage from './pages/sign/SignUpPage';
import KakaoRedirectPage from './pages/sign/KakaoRedirectPage';
import EmailAuthPage from './pages/sign/EmailAuthPage'
import FindPasswordPage from './pages/sign/FindPasswordPage';

import ProfilePage from './pages/profile/ProfilePage';
import PasswordChangePage from './pages/profile/PasswordChangePage';
import ResignPage from './pages/profile/ResignPage';
import ResignAfterPage from './pages/profile/ResignAfterPage';

import RecordPage from './pages/record/RecordPage';
import ShoulderPage from './pages/record/ShoulderPage';
import LegPage from './pages/record/LegPage';

import StampPage from './components/stamp/Stamp';
import LikePage from './pages/like/LikePage';
import NotPound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/login/findPassword" element={<FindPasswordPage />} />
        <Route path="/auth/kakao/callback" element={<KakaoRedirectPage />} />
        <Route path="/join" element={<SignUpPage />} />
        <Route path="/join/emailAuth/:userIdx" element={<EmailAuthPage />} />

        <Route path="/stretching" element={<StretchingListPage />} />
        <Route path="/stretching/detail/:idx" element={<StretchingDetailPage />} />

        <Route path="/event" element={<Event />} />


        <Route path="/mypage/profile" element={<ProfilePage />} />
        <Route path="/mypage/profile/passwordChange" element={<PasswordChangePage />} />
        <Route path="/mypage/profile/resign" element={<ResignPage />} />
        <Route path="/resign" element={<ResignAfterPage />} />

        <Route path="/mypage/like" element={<LikePage />} />
        <Route path="/mypage/stamp" element={<StampPage />} />

        <Route path="/mypage/record" element={<RecordPage />} />
        <Route path="/mypage/record/shoulder" element={<ShoulderPage />} />
        <Route path="/mypage/record/leg" element={<LegPage />} />
        <Route path="*" element={<NotPound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
