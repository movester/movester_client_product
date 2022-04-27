import React, { useState, useEffect } from 'react';
import axios from '../../services/defaultClient';
import TitleWrapper from '../../components/common/TitleWrapper';
import SendEmailAuth from '../../components/findPassword/SendEmailAuth';
import EmailAuth from '../../components/findPassword/EmailAuth';
import ResetPassword from '../../components/findPassword/ResetPassword';
import emailRegex from '../../util/emailRegex';
import passwordRegex from '../../util/passwordRegex';
import authNumRegex from '../../util/authNumRegex';

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

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

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

    if (name === 'email') {
      setEmailMessage(emailRegex.test(value) ? '' : '올바른 이메일 형식이 아닙니다.');
    } else if (name === 'password') {
      setPasswordMessage(
        passwordRegex.test(value) ? '' : '영문, 숫자를 반드시 포함하여 8자리 이상 20자리 이하로 입력해주세요.'
      );
    } else if (name === 'passwordConfirm') {
      setPasswordConfirmMessage(value === password ? '' : '비밀번호 확인이 일치하지 않습니다.');
    }
  };

  const onSendEmailSubmit = async e => {
    e.preventDefault();
    if (email === '' || (email !== '' && emailMessage !== '')) return;

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
    if(!authNumRegex.test(authNum)) {
      setErrModalOn(prev => !prev);
      setErrMsg("잘못된 인증번호입니다.");
      return;
    }
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

    if (!passwordRegex.test(password) || password !== passwordConfirm) return;

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
            passwordMessage={passwordMessage}
            passwordConfirmMessage={passwordConfirmMessage}
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
          />
        )
      ) : (
        <SendEmailAuth
          onChange={onChange}
          onSubmit={onSendEmailSubmit}
          email={email}
          emailMessage={emailMessage}
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
