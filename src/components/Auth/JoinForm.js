import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AuthForm from './AuthForm';
import EmailAuth from './EmailAuth';

import emailRegex from '../../lib/validation/emailRegex';
import passwordRegex from '../../lib/validation/passwordRegex';
import { fetchJoinThunk } from '../../store/auth/authAsyncThunk';
import { changeField, initializeForm } from '../../store/form/formSlice';
import { initializeAuth } from '../../store/auth/authSlice';
import { persistor } from '../..';

function JoinForm() {
  const dispatch = useDispatch();
  const { join, authenticate, error, user } = useSelector(({ form, auth }) => ({
    join: form.join,
    authenticate: form.authenticate,
    error: auth.error,
    user: auth.user,
  }));
  const { email, password, passwordConfirm, username } = join;

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isName, setIsName] = useState(false);

  const [modalOn, setModalOn] = useState(false);
  const [emailAuthentication, setEmailAuthentication] = useState(false);

  const onChange = e => {
    const { value, name } = e.target;
    const { password } = join;

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
    } else if (name === 'passwordConfirm' && value.length > 0 && !passwordRegex.test(value)) {
      setIsPasswordConfirm(false);
      setPasswordConfirmMessage('영문자, 숫자, 특수문자 조합으로 8자리 이상 입력해주세요.');
    } else if (name === 'passwordConfirm') {
      if (passwordRegex.test(value) && password !== value) {
        // 비밀번호 일치하지 않는 경우
        setIsPasswordConfirm(false);
        setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
      } else if (value === '') {
        setIsPasswordConfirm(true);
        setPasswordConfirmMessage('');
      } else {
        setIsPasswordConfirm(true);
        setPasswordConfirmMessage('');
      }
    } else if (name === 'username' && value !== '' && value.length < 2) {
      setIsName(false);
      setNameMessage('2글자 이상의 이름을 입력해주세요.');
    } else if (name === 'username') {
      if (value === '') {
        setIsName(true);
        setNameMessage('');
      }
      if (value.length >= 2) {
        setIsName(true);
        setNameMessage('');
      }
    }

    dispatch(
      changeField({
        form: 'join',
        key: name,
        value,
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();

    dispatch(fetchJoinThunk({ email, password, confirmPassword: passwordConfirm, name: username }));
  };

  useEffect(() => {
    dispatch(initializeForm('join'));
  }, []);

  useEffect(() => {
    if (error) {
      // console.log(error);
      alert(error.error);
      dispatch(initializeAuth());
      dispatch(initializeForm('join'));
      persistor.purge();
    }
    if (!error && user) {
      setModalOn(prev => !prev);
      setTimeout(() => {
        setModalOn(prev => !prev);
        setEmailAuthentication(prev => !prev);
      }, 3000);
    }
  }, [error]);

  return emailAuthentication ? (
    <EmailAuth form={authenticate} />
  ) : (
    <AuthForm
      type="join"
      form={join}
      onChange={onChange}
      onSubmit={onSubmit}
      modalOn={modalOn}
      emailMessage={emailMessage}
      passwordMessage={passwordMessage}
      passwordConfirmMessage={passwordConfirmMessage}
      nameMessage={nameMessage}
      isEmail={isEmail}
      isPassword={isPassword}
      isPasswordConfirm={isPasswordConfirm}
      isName={isName}
    />
  );
}

export default JoinForm;
