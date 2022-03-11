import React from 'react';
import Main from '../components/common/Main';
import AuthTemplate from '../components/common/AuthTemplate';
import LoginForm from '../containers/Auth/LoginForm';

function LoginPage() {
  return (
    <Main>
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </Main>
  );
}

export default LoginPage;
