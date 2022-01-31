import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../components/utils/Main';
import Nav from '../components/utils/Nav';
import ProfillTitle from '../components/elements/ProfileTitle';
import Button from '../components/elements/Button';

function profill() {
  return (
    <Main type="profill">
      <Nav />
      <StyledWrap>
        <ProfillTitle title="비밀번호" />
        <StyledButtonWrap>
          <Link to="/profill/PwChange">
            <Button text="비밀번호 변경" />
          </Link>
        </StyledButtonWrap>

        <ProfillTitle title="회원 탈퇴" />
        <StyledFlexWrap>
          <p>
            회원 탈퇴 시 기존 정보를 다시 복구시킬 수 없습니다. <br />
            그래도 정말로 회원 탈퇴를 원하시나요 ?
          </p>
          <StyledButtonWrap>
            <Link to="/profill/userDelete">
              <Button text="탈퇴" />
            </Link>
          </StyledButtonWrap>
        </StyledFlexWrap>
      </StyledWrap>
    </Main>
  );
}

export default profill;

const StyledWrap = styled.section`
  width: 100%;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    line-height: 25px;
  }
`;
