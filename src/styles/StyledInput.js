import styled from 'styled-components';

const StyledInput = styled.input`
  width: 380px;
  height: 45px;
  background: rgba(196, 196, 196, 0.5);
  outline: none;
  border: none;
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 5px;

  &:focus {
    border: 2px solid rgb(109, 102, 170);
  }
`;

export default StyledInput;
