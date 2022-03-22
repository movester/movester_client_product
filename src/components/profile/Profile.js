import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ProfileTitle from '../elements/ProfileTitle';
import StyledButton from '../../styles/StyledButton';

function Profile() {
  return (
    <StyledWrap>
      <ProfileTitle title="비밀번호" />
      <StyledButtonWrap>
        <Link to="/mypage/profile/passwordChange">
          <StyledButton type="button">비밀번호 변경</StyledButton>
        </Link>
      </StyledButtonWrap>
      <Styledmt50>
        <ProfileTitle title="회원 탈퇴" />
        <StyledFlexWrap>
          <p>
            회원 탈퇴 시, 기존 정보를 다시 복구시킬 수 없습니다. <br />
            그래도 정말로 회원 탈퇴를 원하시나요 ?
          </p>
          <StyledButtonWrap>
            <Link to="/mypage/profile/resign">
            <StyledButton type="button">탈퇴</StyledButton>
            </Link>
          </StyledButtonWrap>
        </StyledFlexWrap>
      </Styledmt50>
    </StyledWrap>
  );
}

export default Profile;

const StyledWrap = styled.section`
  width: 100%;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

const StyledFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    line-height: 25px;
  }
  @media screen and (max-width: 1024px) {
    flex-flow: column;
    align-items: start;
    line-height: 110px;
  }
`;

const Styledmt50 = styled.div`
  margin-top: 50px;
`;
