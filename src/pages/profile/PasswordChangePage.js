import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import PasswordChange from '../../components/profile/PasswordChange';

function PasswordChangePage() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    curPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const { curPassword, newPassword, confirmPassword } = inputs;

  const [modalOn, setModalOn] = useState(false);
  const handleModal = () => {
    setModalOn(!modalOn);
  };

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
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.patch('users/password', {
        curPassword,
        newPassword,
        confirmPassword,
      });

      if (data.success) {
        setModalOn(prev => !prev);
        navigate('/mypage/profile');
      }
    } catch (err) {
      setInputs({
        curPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  return (
    <Main type="profile">
      <Nav />
      <PasswordChange
        curPassword={curPassword}
        newPassword={newPassword}
        confirmPassword={confirmPassword}
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

export default PasswordChangePage;
