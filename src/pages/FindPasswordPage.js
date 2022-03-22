import React, { useState, useEffect } from 'react';
import axios from '../services/defaultClient';
import TitleWrapper from '../components/common/TitleWrapper';
import SendEmailAuth from '../components/findPassword/SendEmailAuth';
import EmailAuth from '../components/findPassword/EmailAuth';
import ResetPassword from '../components/findPassword/ResetPassword';

function FindPasswordPage() {
  const [isSendMail, setIsSendMail] = useState(false);
  const [isEmailAuth, setIsEmailAuth] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  const [inputs, setInputs] = useState({
    email: '',
    authNum: '',
    password: '',
    passwordConfirm: '',
  });

  const { email, authNum, password, passwordConfirm } = inputs;

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSendEmailSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.post('users/email-auth/password', {
        email,
      });

      if (data.success) {
        setIsSendMail(prev => !prev);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  const onEmailAuthSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.get(`users/email-auth/password?email=${email}&emailAuthNum=${authNum}`);

      if (data.success) {
        setIsEmailAuth(prev => !prev);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  const onResetPasswordSubmit = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.patch('users/password/reset', {
        email,
        password,
        confirmPassword: passwordConfirm,
      });

      if (data.success) {
        setIsResetPassword(prev => !prev);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  useEffect(() => {}, [isSendMail, isEmailAuth, isResetPassword]);

  return (
    <TitleWrapper title={isEmailAuth ? '비밀번호 재설정' : '비밀번호 찾기'}>
      {isSendMail ? (
        isEmailAuth ? (
          <ResetPassword
            onChange={onChange}
            onSubmit={onResetPasswordSubmit}
            email={email}
            password={password}
            passwordConfirm={passwordConfirm}
            isResetPassword={isResetPassword}
            errModalOn={errModalOn}
            handleErrModal={handleErrModal}
            errMsg={errMsg}
          />
        ) : (
          <EmailAuth
            onChange={onChange}
            onSubmit={onEmailAuthSubmit}
            email={email}
            errModalOn={errModalOn}
            handleErrModal={handleErrModal}
            errMsg={errMsg}
          />
        )
      ) : (
        <SendEmailAuth
          onChange={onChange}
          onSubmit={onSendEmailSubmit}
          email={email}
          authNum={authNum}
          errModalOn={errModalOn}
          handleErrModal={handleErrModal}
          errMsg={errMsg}
        />
      )}
    </TitleWrapper>
  );
}

export default FindPasswordPage;
