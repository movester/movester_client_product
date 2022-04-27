import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import PasswordChange from '../../components/profile/PasswordChange';
import passwordRegex from '../../util/passwordRegex';

function PasswordChangePage() {
  const navigate = useNavigate();

  const [passwordCurMessage, setCurPasswordMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');

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

    if (name === 'curPassword') {
      setCurPasswordMessage(
        passwordRegex.test(value) ? '' : '영문, 숫자를 반드시 포함하여 8자리 이상 20자리 이하로 입력해주세요.'
      );
    } else if (name === 'newPassword') {
      setPasswordMessage(
        passwordRegex.test(value) ? '' : '영문, 숫자를 반드시 포함하여 8자리 이상 20자리 이하로 입력해주세요.'
      );
    } else if (name === 'confirmPassword') {
      setPasswordConfirmMessage(value === newPassword ? '' : '비밀번호 확인이 일치하지 않습니다.');
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (!passwordRegex.test(curPassword) || !passwordRegex.test(newPassword) || confirmPassword !== newPassword) return;
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
      setPasswordConfirmMessage('');
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
        passwordCurMessage={passwordCurMessage}
        passwordMessage={passwordMessage}
        passwordConfirmMessage={passwordConfirmMessage}
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
