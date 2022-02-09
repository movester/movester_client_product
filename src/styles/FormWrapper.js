import styled from 'styled-components';

import flexCenterAlign from './flexCenterAlign';

const FormWrapper = styled.form`
  ${flexCenterAlign}
  position: relative;
  font-size: 10px;
  & p {
    height: 10px;
    font-weight: bold;
  }
  & .email-message {
    color: red;
    transform: translate(-120px, -10px);
    @media (max-width: 400px) {
      transform: translate(-55px, -10px);
    }
  }
  & .password-message {
    color: red;
    transform: translate(-65px, -10px);
    @media (max-width: 400px) {
      transform: translate(0, -10px);
    }
  }
  & .confirm-message {
    color: red;
    transform: translate(-65px, -10px);
    @media (max-width: 400px) {
      transform: translate(0px, -10px);
    }
  }
  & .name-message {
    color: red;
    transform: translate(-110px, -10px);
    @media (max-width: 400px) {
      transform: translate(-45px, -10px);
    }
  }
`;

export default FormWrapper;
