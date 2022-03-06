import React from 'react';
import AuthTemplate from '../components/common/AuthTemplate';
import Main from '../components/common/Main';
import FindPasswordForm from '../components/Auth/FindPasswordForm';

function FindPasswordPage() {
  return (
    <Main>
      <AuthTemplate>
        <FindPasswordForm />
      </AuthTemplate>
    </Main>
  );
}

export default FindPasswordPage;
