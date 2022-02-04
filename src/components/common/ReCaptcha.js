import React from 'react';
import styled from 'styled-components';

function ReCaptcha() {
  return (
    <StyledReCaptchaWrap>
      <div className="area" />
      <div className="recaptcha">recaptcha</div>
    </StyledReCaptchaWrap>
  );
}

export default ReCaptcha;

const StyledReCaptchaWrap = styled.div`
  width: 60%;
  display: flex;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  .area {
    width: 25%;
    @media screen and (max-width: 1024px) {
      display: none;
    }
  }
  .recaptcha {
    width: 100%;
    max-width: 380px;
    height: 100px;
    background-color: gray;
  }
`;
