import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import TitleWrapper from '../../components/common/TitleWrapper';
import SignForm from '../../components/sign/SignForm';
import Loading from '../../components/common/Loading';
import emailRegex from '../../util/emailRegex';
import passwordRegex from '../../util/passwordRegex';
import nameRegex from '../../util/nameRegex';

function SignUpPage() {
  const navigate = useNavigate();

  useEffect(() => window.scrollTo(0, 0));

  const [isLoading, setIsLoading] = useState(false);

  const agreeCheckRef = useRef(null);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  });

  const { email, password, passwordConfirm, username } = inputs;

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');

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
    } else if (name === 'username') {
      setNameMessage(nameRegex.test(value) ? '' : '한글, 영문, 숫자로 조합된 2자리 이상 12자리 이하로 입력해주세요.');
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    const isAgreeChecked = document.querySelector('.agree-check').checked;
    if (!isAgreeChecked) {
      setErrModalOn(prev => !prev);
      setErrMsg('이용약관에 동의해주세요.');
      return;
    }
    
    if (
      !emailRegex.test(email) ||
      !passwordRegex.test(password) ||
      passwordConfirm !== password ||
      !nameRegex.test(username)
    )
      return;

    try {
      document.querySelector('.join-btn').disabled = true;
      setIsLoading(() => true);
      const { data } = await axios.post('users/join', {
        email,
        password,
        confirmPassword: passwordConfirm,
        name: username,
      });
      if (data.success) {
        navigate(`/join/emailAuth/${data.data.userIdx}`);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  return (
    <TitleWrapper title={isLoading ? '인증 메일 전송중...' : '회원가입'}>
      {isLoading ? (
        <Loading />
      ) : (
        <SignForm
          type="join"
          onChange={onChange}
          onSubmit={onSubmit}
          email={email}
          password={password}
          username={username}
          passwordConfirm={passwordConfirm}
          emailMessage={emailMessage}
          passwordMessage={passwordMessage}
          passwordConfirmMessage={passwordConfirmMessage}
          nameMessage={nameMessage}
          errModalOn={errModalOn}
          handleErrModal={handleErrModal}
          errMsg={errMsg}
          ref={agreeCheckRef}
        />
      )}
    </TitleWrapper>
  );
}

export default SignUpPage;
