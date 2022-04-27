import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TitleWrapper from '../../components/common/TitleWrapper';
import SignForm from '../../components/sign/SignForm';
import emailRegex from '../../util/emailRegex';
import passwordRegex from '../../util/passwordRegex';
import { fetchLoginThunk } from '../../store/auth/authAsyncThunk';

function SignInPage() {
  useEffect(() => window.scrollTo(0, 0));

  const isError = useSelector(state => state.auth.error);

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [userIdx, setUserIdx] = useState(null);

  const handleErrModal = () => {
    setErrModalOn(prev => !prev);
  };

  const [linkModalOn, setLinkModalOn] = useState(false);
  const handleLinkModal = () => {
    setLinkModalOn(prev => !prev);
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
        setPasswordMessage('영문, 숫자를 반드시 포함하여 8자리 이상 20자리 이하로 입력해주세요.');
      } else if (passwordRegex.test(value)) {
        setIsPassword(() => true);
        setPasswordMessage('');
      } else if (password === '') {
        setIsPassword(() => false);
        setPasswordMessage('');
      }
    }
    setIsSubmit(isEmail && isPassword);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (isEmail && isPassword) {
      dispatch(fetchLoginThunk({ email, password }));
    }
  };

  useEffect(() => {
    if (isError) {
      setInputs({
        email: '',
        password: '',
      });
      const errMsg = isError.error || '잘못된 이메일, 혹은 비밀번호입니다.';

      if (errMsg === '아직 이메일 인증을 하지 않았습니다.') {
        setUserIdx(isError.data.userIdx);
        setLinkModalOn(prev => !prev);
      } else {
        setErrModalOn(prev => !prev);
        setErrMsg(errMsg);
      }
    }
  }, [isError]);

  useEffect(() => {
    setErrModalOn(false);
    setLinkModalOn(false);
  }, []);

  return (
    <TitleWrapper title="로그인">
      <SignForm
        type="login"
        onChange={onChange}
        onSubmit={onSubmit}
        email={email}
        password={password}
        emailMessage={emailMessage}
        passwordMessage={passwordMessage}
        isSubmit={isSubmit}
        errModalOn={errModalOn}
        handleErrModal={handleErrModal}
        errMsg={errMsg}
        linkModalOn={linkModalOn}
        handleLinkModal={handleLinkModal}
        userIdx={userIdx}
      />
    </TitleWrapper>
  );
}

export default SignInPage;
