import styled from 'styled-components';

const StyledButton = styled.button`
  display: block;
  width: 380px;
  height: 45px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: ${({ theme }) => theme.lightPurple};
  margin: 10px auto;
  border-radius: 25px;

  &.kakao-login {
    margin-top: 23px;
    background-image: url('/assets/kakao_login.png');
    background-size: cover;
    background-position: center;
    display: block;
  }

  &.margin {
    margin-bottom: 20px;
  }

  &.right {
    float: right;
  }

  &.left {
    float: left;
  }

  @media (max-width: 400px) {
    width: 350px;
    height: 40px;

    &.kakao-login {
      background-position: initial;
    }
  }
`;

export default StyledButton;
