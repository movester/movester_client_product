import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import PublicRoute from './lib/PublicRoute';
import PrivateRoute from './lib/PrivateRoute';

import Header from './components/common/Header';
import Footer from './components/common/Footer';

import theme from './theme';
import IndexPage from './pages/IndexPage';
import About from './pages/About';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

import StretchingListPage from './pages/stretching/StretchingListPage';
import StretchingDetailPage from './pages/stretching/StretchingDetailPage';

import Event from './pages/Event';
import SignInPage from './pages/sign/SignInPage';
import SignUpPage from './pages/sign/SignUpPage';
import KakaoRedirectPage from './pages/sign/KakaoRedirectPage';
import EmailAuthPage from './pages/sign/EmailAuthPage';
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
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <SignInPage />
            </PublicRoute>
          }
        />
        <Route
          path="/login/findPassword"
          element={
            <PublicRoute>
              <FindPasswordPage />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/kakao/callback"
          element={
            <PublicRoute>
              <KakaoRedirectPage />
            </PublicRoute>
          }
        />
        <Route
          path="/join"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route
          path="/join/emailAuth/:userIdx"
          element={
            <PublicRoute>
              <EmailAuthPage />
            </PublicRoute>
          }
        />

        <Route path="/stretching" element={<StretchingListPage />} />
        <Route path="/stretching/detail/:idx" element={<StretchingDetailPage />} />

        <Route path="/event" element={<Event />} />

        <Route
          path="/mypage/profile"
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/mypage/profile/passwordChange"
          element={
            <PrivateRoute>
              <PasswordChangePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/mypage/profile/resign"
          element={
            <PrivateRoute>
              <ResignPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/resign"
          element={
            <PrivateRoute>
              <ResignAfterPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/mypage/like"
          element={
            <PrivateRoute>
              <LikePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/mypage/stamp"
          element={
            <PrivateRoute>
              <StampPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/mypage/record"
          element={
            <PrivateRoute>
              <RecordPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/mypage/record/shoulder"
          element={
            <PrivateRoute>
              <ShoulderPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/mypage/record/leg"
          element={
            <PrivateRoute>
              <LegPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
