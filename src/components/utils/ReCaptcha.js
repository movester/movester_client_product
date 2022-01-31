import React from 'react';
import styled from 'styled-components';

function ReCaptcha() {
  return (
    <StyledReCaptchaWrap>
      <div />
      <div className="recaptcha">recaptcha</div>
    </StyledReCaptchaWrap>
  );
}

export default ReCaptcha;

const StyledReCaptchaWrap = styled.div`
  width: 60%;
  display: flex;
  div {
    width: 25%;
  }
  .recaptcha {
    width: 100%;
    max-width: 380px;
    height: 100px;
    background-color: gray;
  }
`;
