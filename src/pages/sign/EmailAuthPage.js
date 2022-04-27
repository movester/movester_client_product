import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/defaultClient';

import TitleWrapper from '../../components/common/TitleWrapper';
import EmailAuth from '../../components/sign/EmailAuth';
import authNumRegex from '../../util/authNumRegex';

function EmailAuthPage() {
  const { userIdx } = useParams();
  const [authNum, setAuthNum] = useState('');
  const [linkModalOn, setLinkModalOn] = useState(false);
  const handleLinkModal = () => {
    setLinkModalOn(!linkModalOn);
  };

  const [resendModalOn, setResendModalOn] = useState(false);
  const handleResendModal = () => {
    setResendModalOn(!resendModalOn);
  };

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onChange = e => {
    setAuthNum(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if(!authNumRegex.test(authNum)) {
      setErrModalOn(prev => !prev);
      setErrMsg("잘못된 인증번호입니다.");
      return;
    }

    try {
      const { data } = await axios.patch('users/email-auth/join', {
        userIdx,
        emailAuthNum: authNum,
      });

      if (data.success) {
        setLinkModalOn(prev => !prev);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg('인증번호가 일치하지 않습니다.');
      setAuthNum('');
    }
  };

  const onResend = async e => {
    e.preventDefault();

    try {
      const { data } = await axios.post('users/email-auth/join', {
        idx: userIdx,
      });

      if (data.success) {
        setResendModalOn(() => true);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
      setAuthNum('');
    }
  };

  return (
    <TitleWrapper title="이메일 인증">
      <EmailAuth
        onChange={onChange}
        onSubmit={onSubmit}
        onResend={onResend}
        authNum={authNum}
        linkModalOn={linkModalOn}
        handleLinkModal={handleLinkModal}
        resendModalOn={resendModalOn}
        handleResendModal={handleResendModal}
        errModalOn={errModalOn}
        handleErrModal={handleErrModal}
        errMsg={errMsg}
      />
    </TitleWrapper>
  );
}

export default EmailAuthPage;
