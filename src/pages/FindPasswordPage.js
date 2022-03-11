import React from 'react';
import AuthTemplate from '../components/common/AuthTemplate';
import Main from '../components/common/Main';
import FindPasswordForm from '../containers/Auth/FindPasswordForm';

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
