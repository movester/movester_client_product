import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import TitleWrapper from '../../components/common/TitleWrapper';
import SignForm from '../../components/sign/SignForm';
import emailRegex from '../../util/emailRegex';
import passwordRegex from '../../util/passwordRegex';

function SignUpPage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    username: '',
  });

  const { email, password, passwordConfirm, username } = inputs;

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

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
      if (value.length > 0 && !emailRegex.test(value)) {
        setIsEmail(() => false);
        setEmailMessage('올바른 이메일 형식이 아닙니다.');
      } else if (emailRegex.test(value)) {
        setIsEmail(() => true);
        setEmailMessage('');
      } else if (value === '') {
        setIsEmail(() => false);
        setEmailMessage('');
      }
    } else if (name === 'password') {
      if (value.length > 0 && !passwordRegex.test(value)) {
        setIsPassword(() => false);
        setPasswordMessage('영문자, 숫자 조합으로 8자리 이상 입력해주세요.');
      } else if (passwordRegex.test(value)) {
        setIsPassword(() => true);
        setPasswordMessage('');
      } else if (password === '') {
        setIsPassword(() => false);
        setPasswordMessage('');
      }
    } else if (name === 'passwordConfirm') {
      if (value !== password) {
        setIsPasswordConfirm(() => false);
        setPasswordConfirmMessage('비밀번호 확인이 일치하지 않습니다.');
      } else {
        setIsPasswordConfirm(() => true);
        setPasswordConfirmMessage('');
      }
    } else if (name === 'username') {
      if (value !== '' && value.length < 2) {
        setIsName(() => false);
        setNameMessage('2글자 이상의 이름을 입력해주세요.');
      } else if (value.length >= 2) {
        setIsName(() => true);
        setNameMessage('');
      } else if (value === '') {
        setIsName(() => false);
        setNameMessage('');
      }
    }
    setIsSubmit(isEmail && isPassword && isPasswordConfirm && isName);
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (!(isEmail && isPassword && isPasswordConfirm && isName)) return;

    try {
      const { data } = await axios.post('users/join', {
        email,
        password,
        confirmPassword: passwordConfirm,
        name: username,
      });
      if (data.success) {
        // TODO: 다음 페이지 연결 전 버튼 disabled
        setIsSubmit(prev => !prev);
        navigate(`/join/emailAuth/${data.data.userIdx}`);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  return (
    <TitleWrapper title="회원가입">
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
        isSubmit={isSubmit}
        errModalOn={errModalOn}
        handleErrModal={handleErrModal}
        errMsg={errMsg}
      />
    </TitleWrapper>
  );
}

export default SignUpPage;
