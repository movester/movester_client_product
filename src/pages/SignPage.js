import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import TitleWrapper from '../components/sign/TitleWrapper';
import SignForm from '../components/sign/SignForm';
import emailRegex from '../lib/validation/emailRegex';
import passwordRegex from '../lib/validation/passwordRegex';
import { fetchLoginThunk } from '../store/auth/authAsyncThunk';

function SignPage() {
  const { isAuth } = useSelector(state => state.auth);
  const isError = useSelector(state => state.auth.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    if (name === 'email' && value.length > 0 && !emailRegex.test(value)) {
      setIsEmail(false);
      setEmailMessage('올바른 이메일 형식이 아닙니다.');
    } else if (name === 'email') {
      if (emailRegex.test(value)) {
        setIsEmail(true);
        setEmailMessage('');
      }
      if (value === '') {
        setIsEmail(true);
        setEmailMessage('');
      }
    } else if (name === 'password' && value.length > 0 && !passwordRegex.test(value)) {
      setIsPassword(false);
      setPasswordMessage('영문자, 숫자 조합으로 8자리 이상 입력해주세요.');
    } else if (name === 'password') {
      if (passwordRegex.test(value)) {
        setIsPassword(true);
        setPasswordMessage('');
      }
      if (value === '') {
        setIsPassword(true);
        setPasswordMessage('');
      }
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(fetchLoginThunk({ email, password }));
  };

  useEffect(() => {
    if (isError) {
      setInputs({
        email: '',
        password: '',
      });
      const errMsg = isError.error || '잘못된 이메일, 혹은 비밀번호입니다.';
      alert(errMsg);
    }
  }, [isError]);

  useEffect(() => {
    if (isAuth) navigate('/');
  }, [isAuth]);

  return (
    <TitleWrapper title="로그인">
      <SignForm
        type="login"
        onChange={onChange}
        onSubmit={onSubmit}
        email={email}
        password={password}
        emailMessage={emailMessage}
        passwordMessage={passwordMessage}
        isEmail={isEmail}
        isPassword={isPassword}
      />
    </TitleWrapper>
  );
}

export default SignPage;
