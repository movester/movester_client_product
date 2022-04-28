import styled from 'styled-components';

const ProfileTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;

  &.margin {
    margin-bottom: 60px;
    @media screen and (max-width: 950px) {
      margin-bottom: 20px;
    }
  }
`;

export default ProfileTitle;
