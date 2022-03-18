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
    padding-left: 12px;
    margin: 5px 0 8px 0;
  }
  & .password-message {
    color: red;
    padding-left: 12px;
    margin: 5px 0 8px 0;
  }
  & .confirm-message {
    color: red;
    padding-left: 12px;
    margin: 5px 0 8px 0;
  }
  & .name-message {
    color: red;
    padding-left: 12px;
    margin: 5px 0 8px 0;
  }
`;

export default FormWrapper;
