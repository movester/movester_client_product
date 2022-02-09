import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import flexCenterAlign from '../../styles/flexCenterAlign';

function ProfileDropMenu() {
  return (
    <ProfileDropMenuWrapper>
      <UserInfoContainer>
        <span className="user-name">조나현님</span>
        <span className="user-email">jnhro1@gmail.com</span>
      </UserInfoContainer>
      <StyledNavigation>
        <NavLink to="/mypage/profile">프로필</NavLink>
        <NavLink to="/mypage/basket">찜한 스트레칭</NavLink>
        <NavLink to="/mypage/stamp">출석도장</NavLink>
        <NavLink to="/mypage/Record">기록</NavLink>
      </StyledNavigation>
    </ProfileDropMenuWrapper>
  );
}

export default ProfileDropMenu;

const ProfileDropMenuWrapper = styled.div`
  position: absolute;
  top: 62px;
  right: 45px;
  background: #fff;
  border: 1px solid #615b5b;
  border-radius: 10px;
  z-index: 10;
  padding: 16px;
  margin-top: 19px;

  .user-name {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2rem;
  }

  .user-email {
    font-size: 1rem;
  }

  a {
    cursor: pointer;
  }

  @media (max-width: 850px) {
    width: 120px;
    padding: 0;
    .user-name {
      font-size: 1rem;
    }
    .user-email {
      font-size: 0.5rem;
    }
    a {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 600px) {
    right: 15px;
  }
`;

const UserInfoContainer = styled.div`
  ${flexCenterAlign}
`;

const StyledNavigation = styled.nav`
  ${flexCenterAlign}
`;
