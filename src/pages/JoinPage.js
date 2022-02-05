import React from 'react';
import AuthTemplate from '../components/common/AuthTemplate';
import Main from '../components/common/Main';
import JoinForm from '../containers/Auth/JoinForm';

function SignupPage() {
  return (
    <Main>
      <AuthTemplate>
        <JoinForm />
      </AuthTemplate>
    </Main>
  );
}

export default SignupPage;
