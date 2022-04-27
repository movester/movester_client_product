import React, { useState } from 'react';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Resign from '../../components/profile/Resign';
import passwordRegex from '../../util/passwordRegex';

function ResignPage() {
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const onChange = e => {
    setPassword(e.target.value);
    setPasswordMessage(
      passwordRegex.test(e.target.value) ? '' : '영문, 숫자를 반드시 포함하여 8자리 이상 20자리 이하로 입력해주세요.'
    );
  };

  const [modalOn, setModalOn] = useState(false);
  const handleModal = () => {
    setModalOn(!modalOn);
    setPassword('');
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if(!passwordRegex.test(password)) return
    try {
      const { data } = await axios.get(`users/password/?password=${password}`);

      if (data.success) {
        setModalOn(prev => !prev);
      }
    } catch (err) {
      setPassword('');
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  return (
    <Main type="profile">
      <Nav />
      <Resign
        password={password}
        passwordMessage={passwordMessage}
        onChange={onChange}
        onSubmit={onSubmit}
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
