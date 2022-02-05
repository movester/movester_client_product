import React from 'react';
import styled from 'styled-components';
import flexCenterAlign from '../../../styles/flexCenterAlign';

import StyledButton from '../../../styles/StyledButton';
import StyledInput from '../../../styles/StyledInput';

function EmailAuth() {
  return (
    <EmailAuthWrapper>
      <h2>이메일 인증</h2>
      <p>입력하신 이메일 계정으로 인증 메일을 발송하였습니다.</p>
      <p>인증을 통해 가입을 완료해 주세요.</p>
      <StyledInput type="text" name="authenticationNumber" placeholder="인증번호" />
      <StyledButton>이메일 인증하기</StyledButton>
      <p className="info">혹시 메일을 받지 못하셨다면 스팸 메일함을 확인해주세요.</p>
    </EmailAuthWrapper>
  );
}

export default EmailAuth;

const EmailAuthWrapper = styled.section`
  ${flexCenterAlign}

  h2 {
    font-size: 36px;
    margin-bottom: 50px;
  }

  p:nth-child(3) {
    margin-bottom: 30px;
  }

  .info {
    margin: 30px 0;
    color: #888383;
    font-size: 14px;
  }
`;
