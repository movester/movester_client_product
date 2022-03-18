import React, { useState } from 'react';
import axios from '../services/defaultClient';

import TitleWrapper from '../components/sign/TitleWrapper';
import EmailAuth from '../components/UI/Auth/EmailAuth';
import SignForm from '../components/sign/SignForm';
import emailRegex from '../lib/validation/emailRegex';
import passwordRegex from '../lib/validation/passwordRegex';

function SignUpPage() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  });
  const {error, setError} = useState(true)
  console.log(error)
  const { email, password, passwordConfirm, username } = inputs;

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isName, setIsName] = useState(false);

  const [modalOn, setModalOn] = useState(false);
  const [emailAuthentication, setEmailAuthentication] = useState(false);

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');

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
      setPasswordMessage('영문자, 숫자, 특수문자 조합으로 8자리 이상 입력해주세요.');
    } else if (name === 'password') {
      if (passwordRegex.test(value)) {
        setIsPassword(false);
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
  };


  const onSubmit = async e => {
    console.log("submit")
    e.preventDefault();


    try {
      const response = await axios.post('users/join', {
        email,
        password,
        confirmPassword: passwordConfirm,
        name: username,
      });
      console.log("success", response)
      // setModalOn(prev => !prev);
      // setTimeout(() => {
      //   setModalOn(prev => !prev);
      //   setEmailAuthentication(prev => !prev);
      // }, 3000);
    } catch (err) {
      console.log(setModalOn,setEmailAuthentication)

      setInputs({
        email: '',
        password: '',
      });
      setError(true)
      // const errMsg = err.error || '잘못된 이메일, 혹은 비밀번호입니다.';
      // alert(errMsg);
      console.error('join api not fetched: ', err);
    }
  };

  return emailAuthentication ? (
    <EmailAuth form="{authenticate}" />
  ) : (
        <TitleWrapper title="회원가입">
          <SignForm
            type="join"
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
            email={email}
            password={password}
            username={username}
            passwordConfirm={passwordConfirm}
          />
        </TitleWrapper>

  );
}

export default SignUpPage;
