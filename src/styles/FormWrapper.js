import styled from 'styled-components';

import flexCenterAlign from './flexCenterAlign';

const FormWrapper = styled.form`
  ${flexCenterAlign}
  position: relative;
  & p {
    height: 10px;
  }
  & .email-message {
    font-size: 12px;
    color: red;
    transform: translate(-110px, -10px);
    @media (max-width: 400px) {
      transform: translate(-45px, -10px);
    }
  }
  & .password-message {
    font-size: 12px;
    color: red;
    transform: translate(-45px, -10px);
    @media (max-width: 400px) {
      transform: translate(20px, -10px);
    }
  }
  & .confirm-message {
    font-size: 12px;
    color: red;
    position: relative;
    top: -10px;
    left: -50px;
  }
  & .name-message {
    font-size: 12px;
    color: red;
    position: relative;
    top: -10px;
    left: -105px;
  }
`;

export default FormWrapper;
