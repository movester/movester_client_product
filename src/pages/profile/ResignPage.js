import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Resign from '../../components/profile/Resign';
import emailRegex from '../../util/emailRegex';
import passwordRegex from '../../util/passwordRegex';

function ResignPage() {
  const user = useSelector(state => state.auth.user);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

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
    }
  };

  const [modalOn, setModalOn] = useState(false);
  const handleModal = () => {
    setModalOn(!modalOn);
    setInputs({
      email: '',
      password: '',
    });
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!passwordRegex.test(password)) return;
    try {
      const { data } = await axios.get(`users/password/?password=${password}`);

      if (data.success) {
        setModalOn(prev => !prev);
      }
    } catch (err) {
      setInputs({
        email: '',
        password: '',
      });
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  const onSubmitByKakao = async e => {
    e.preventDefault();
    if (!emailRegex.test(email)) return;

    if (user.email === email) {
      setModalOn(prev => !prev);
    } else {
      setInputs({
        email: '',
        password: '',
      });
      setErrModalOn(prev => !prev);
      setErrMsg('잘못된 이메일입니다.');
    }
  };

  return (
    <Main type="profile">
      <Nav />
      <Resign
        email={email}
        emailMessage={emailMessage}
        password={password}
        passwordMessage={passwordMessage}
        onChange={onChange}
        onSubmit={onSubmit}
        onSubmitByKakao={onSubmitByKakao}
        modalOn={modalOn}
        handleModal={handleModal}
        errModalOn={errModalOn}
        handleErrModal={handleErrModal}
        errMsg={errMsg}
      />
    </Main>
  );
}

export default ResignPage;
