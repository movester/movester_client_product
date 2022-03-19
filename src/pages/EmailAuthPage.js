import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/defaultClient';

import TitleWrapper from '../components/common/TitleWrapper';
import EmailAuth from '../components/UI/Auth/EmailAuth';

function EmailAuthPage() {
  const { userIdx } = useParams();
  const [authNum, setAuthNum] = useState('');
  const [linkModalOn, setLinkModalOn] = useState(false);
  const handleLinkModal = () => {
    setLinkModalOn(!linkModalOn);
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
      setErrMsg(err.response.data.error);
      setAuthNum('');
    }
  };

  return (
    <TitleWrapper title="이메일 인증">
      <EmailAuth
        onChange={onChange}
        onSubmit={onSubmit}
        authNum={authNum}
        linkModalOn={linkModalOn}
        handleLinkModal={handleLinkModal}
        errModalOn={errModalOn}
        handleErrModal={handleErrModal}
        errMsg={errMsg}
      />
    </TitleWrapper>
  );
}

export default EmailAuthPage;
