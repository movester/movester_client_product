import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import AuthForm from './AuthForm';
import emailRegex from '../../lib/validation/emailRegex';
import passwordRegex from '../../lib/validation/passwordRegex';
import { fetchLoginThunk } from '../../store/auth/authAsyncThunk';
import { changeField, initializeForm } from '../../store/form/formSlice';
import { initializeAuth } from '../../store/auth/authSlice';

function LoginForm() {
  const dispatch = useDispatch();
  const { login, isLogin, error } = useSelector(({ form, auth }) => ({
    login: form.login,
    isLogin: auth.isLogin,
    error: auth.error,
  }));

  const { email, password } = login;
  const navigate = useNavigate();

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;

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
      setPasswordMessage('영문자, 숫자, 특수문자 조합으로 8자리 이상 입력해주세요.');
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

    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    if (!passwordRegex.test(login.password)) {
      alert('영문자, 숫자, 특수문자 조합으로 8자리 이상 입력해주세요.');
      return;
    }
    dispatch(fetchLoginThunk({ email, password }));
  };

  // 첫 렌더링 시 form 초기화
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, []);

  useEffect(() => {
    if (isLogin) navigate('/');
  }, [isLogin]);

  useEffect(() => {
    if (error) {
      alert(error.error);
      dispatch(initializeAuth());
    }
  }, [error]);

  return (
    <AuthForm
      type="login"
      form={login}
      onChange={onChange}
      onSubmit={onSubmit}
      emailMessage={emailMessage}
      passwordMessage={passwordMessage}
      isEmail={isEmail}
      isPassword={isPassword}
    />
  );
}

export default LoginForm;
