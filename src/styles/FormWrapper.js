import styled from 'styled-components';

import flexCenterAlign from './flexCenterAlign';

const FormWrapper = styled.form`
  ${flexCenterAlign}
  position: relative;
  & .email-message {
    font-size: 12px;
    color: red;
    position: relative;
    top: -10px;
    left: -115px;
  }
  & .password-message {
    font-size: 12px;
    color: red;
    position: relative;
    top: -10px;
    left: -50px;
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
