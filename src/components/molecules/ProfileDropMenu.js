import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  z-index: 11;
  padding: 16px;
  margin-top: 19px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .user-name {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  }

  .user-email {
    font-size: 14px;
  }
`;

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    font-size: 18px;
    cursor: pointer;
  }
`;
