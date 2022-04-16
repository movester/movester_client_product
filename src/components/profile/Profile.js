import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProfileTitle from '../elements/ProfileTitle';

function Profile() {
  return (
    <StyledWrap>
      <ProfileTitle title="비밀번호 변경" />
      <Link to="/mypage/profile/passwordChange">
        <StyledButton type="button">비밀번호 변경</StyledButton>
      </Link>
      <Styledmt50>
        <ProfileTitle title="회원 탈퇴" />
        <p>
          회원 탈퇴 시, 기존 정보를 다시 복구시킬 수 없습니다. <br />
          그래도 정말로 회원 탈퇴를 원하시나요 ?
        </p>
        <Link to="/mypage/profile/resign">
          <StyledButton type="button">탈퇴</StyledButton>
        </Link>
      </Styledmt50>
    </StyledWrap>
  );
}

export default Profile;

const StyledWrap = styled.section`
  width: 100%;
  text-align: left;

  p {
    line-height: 20px;
    margin-bottom: 15px;
  }
`;

const Styledmt50 = styled.div`
  margin-top: 50px;
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
