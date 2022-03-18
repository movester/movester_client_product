import styled from 'styled-components';

const StyledButton = styled.button`
  width: 380px;
  height: 45px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: ${({ theme }) => theme.lightPurple};
  margin: 10px 0;
  border-radius: 15px;

  &.kakao-login {
    background-image: url('/assets/kakao_login_large_wide.png');
    background-size: cover;
    background-position: center;
    display: block;
  }

  @media (max-width: 400px) {
    width: 250px;
    height: 40px;

    &.kakao-login {
      background-position: initial;
    }
  }
`;

export default StyledButton;
