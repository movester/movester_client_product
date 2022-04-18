import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import PasswordChange from '../../components/profile/PasswordChange';
import passwordRegex from '../../util/passwordRegex';

function PasswordChangePage() {
  const navigate = useNavigate();

  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

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

    if (name === 'newPassword') {
      if (value.length > 0 && !passwordRegex.test(value)) {
        setIsPassword(() => false);
        setPasswordMessage('영문자, 숫자 조합으로 8자리 이상 입력해주세요.');
      } else if (passwordRegex.test(value)) {
        setIsPassword(() => true);
        setPasswordMessage('');
      } else if (newPassword === '') {
        setIsPassword(() => false);
        setPasswordMessage('');
      }
    } else if (name === 'confirmPassword') {
      if (value !== newPassword) {
        setIsPasswordConfirm(() => false);
        setPasswordConfirmMessage('비밀번호 확인이 일치하지 않습니다.');
      } else {
        setIsPasswordConfirm(() => true);
        setPasswordConfirmMessage('');
      }
    }

    setIsSubmit(isPassword && isPasswordConfirm);
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
        passwordMessage={passwordMessage}
        passwordConfirmMessage={passwordConfirmMessage}
        onChange={onChange}
        isSubmit={isSubmit}
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
