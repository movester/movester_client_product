import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { fetchEmailAuthThunk } from '../../store/auth/authAsyncThunk';
import { changeField } from '../../store/form/formSlice';

import flexCenterAlign from '../../styles/flexCenterAlign';
import StyledButton from '../../styles/StyledButton';
import StyledInput from '../../styles/StyledInput';

function EmailAuth({ form }) {
  const { user } = useSelector(({ auth }) => ({
    user: auth.user,
  }));
  const dispatch = useDispatch();
  const { emailVerifyKey } = form;
  const navigate = useNavigate();

  const onChange = e => {
    const { value, name } = e.target;

    dispatch(changeField({ form: 'authenticate', key: name, value }));
  };

  const authenticateEmail = () => {
    dispatch(fetchEmailAuthThunk({ userIdx: user.data.userIdx, emailAuthNum: emailVerifyKey }));
    if (user.success) {
      setTimeout(() => navigate('/'), 2000);
    }
  };

  return (
    <EmailAuthWrapper>
      <h2>이메일 인증</h2>
      <p>입력하신 이메일 계정으로 인증 메일을 발송하였습니다.</p>
      <p>인증을 통해 가입을 완료해 주세요.</p>
      <StyledInput
        type="text"
        name="emailVerifyKey"
        value={emailVerifyKey}
        placeholder="인증번호"
        onChange={onChange}
      />
      <StyledButton onClick={authenticateEmail}>이메일 인증하기</StyledButton>
      <p className="info">혹시 메일을 받지 못하셨다면 스팸 메일함을 확인해주세요.</p>
    </EmailAuthWrapper>
  );
}

EmailAuth.propTypes = {
  form: PropTypes.instanceOf(Object).isRequired,
};

export default EmailAuth;

const EmailAuthWrapper = styled.section`
  ${flexCenterAlign}

  h2 {
    font-size: 36px;
    margin-bottom: 50px;
  }

  p {
    font-size: 0.9rem;
  }

  p:nth-child(3) {
    margin-bottom: 30px;
  }

  .info {
    margin: 30px 0;
    color: #888383;
  }
`;
