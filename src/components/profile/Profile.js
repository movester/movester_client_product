import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ProfileTitle from '../elements/ProfileTitle';

function Profile() {
  const user = useSelector(state => state.auth.user);

  return (
    <StyledWrap>
      <MobileProfile>
        {' '}
        <p>{user.name}</p>
        <p className="email">{user.email}</p>
      </MobileProfile>
      {user.isKakao || (
        <>
          <ProfileTitle>비밀번호 변경</ProfileTitle>
          <Link to="/mypage/profile/passwordChange">
            <StyledButton type="button">비밀번호 변경</StyledButton>
          </Link>
          <Styledmt50 />
        </>
      )}

      <ProfileTitle>회원 탈퇴</ProfileTitle>
      <p>
        회원 탈퇴 시, 기존 정보를 다시 복구시킬 수 없습니다. <br />
        그럼에도 회원 탈퇴를 원하시나요?
      </p>
      <Link to="/mypage/profile/resign">
        <StyledButton type="button">탈퇴</StyledButton>
      </Link>
    </StyledWrap>
  );
}

export default Profile;

const StyledWrap = styled.section`
  width: 100%;
  text-align: left;
  p {
    line-height: 24px;
    margin-bottom: 15px;
    font-size: 14px;
  }
`;

const MobileProfile = styled.nav`
  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0px;
  }
  .email {
    font-size: 12px;
    font-weight: normal;
    color: #595959;
  }
  margin-bottom: 50px;
  @media screen and (min-width: 1051px) {
    display: none;
  }
`;

const Styledmt50 = styled.div`
  margin-bottom: 50px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 45px;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  background-color: ${({ theme }) => theme.lightPurple};
  margin: 10px auto;
  border-radius: 25px;
`;
