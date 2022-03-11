import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../components/common/Main';
import Nav from '../components/common/Nav';
import ProfillTitle from '../components/elements/ProfileTitle';
import Button from '../components/elements/Button';

function Profile() {
  return (
    <Main type="profill">
      <Nav />
      <StyledWrap>
        <ProfillTitle title="비밀번호" />
        <StyledButtonWrap>
          <Link to="/mypage/profile/PwChange">
            <Button text="비밀번호 변경" />
          </Link>
        </StyledButtonWrap>
        <Styledmt50>
          <ProfillTitle title="회원 탈퇴" />
          <StyledFlexWrap>
            <p>
              회원 탈퇴 시 기존 정보를 다시 복구시킬 수 없습니다. <br />
              그래도 정말로 회원 탈퇴를 원하시나요 ?
            </p>
            <StyledButtonWrap>
              <Link to="/mypage/profile/account">
                <Button text="탈퇴" />
              </Link>
            </StyledButtonWrap>
          </StyledFlexWrap>
        </Styledmt50>
      </StyledWrap>
    </Main>
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
