import styled from 'styled-components';

const StyledInput = styled.input`
display: block;
  width: 380px;
  height: 45px;
  background: rgba(196, 196, 196, 0.5);
  outline: none;
  border: none;
  border-radius: 15px;
  margin: 0 auto 15px auto;
  padding: 15px;

  &:focus {
    border: 2px solid rgb(109, 102, 170);
  }

  &.sign {
    margin: 0;
  }

  & + & {
    margin-top: 20px;
  }

  @media (max-width: 400px) {
    width: 250px;
    height: 40px;
  }
`;

export default StyledInput;
