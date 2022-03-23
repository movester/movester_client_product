import React, { useState } from 'react';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Resign from '../../components/profile/Resign';

function ResignPage() {
  const [password, setPassword] = useState('');
  const onChange = e => {
    setPassword(e.target.value);
  };

  const [modalOn, setModalOn] = useState(false);
  const handleModal = () => {
    setModalOn(!modalOn);
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onSubmit = async e => {
    e.preventDefault();
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
