import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../common/Main';
import Nav from '../common/Nav';
import ProfileTitle from '../elements/ProfileTitle';
import Button from '../elements/Button';
import Account from './Acoount';
import PwChange from './PwChange';

function Profile() {
  const [page, setPage] = useState(1);

  const pwPage = () => {
    setPage(2);
  };

  const accountPage = () => {
    setPage(3);
  };

  const renderPageStep = pageNumber => {
    switch (pageNumber) {
      case 1:
        return (
          <>
            <StyledView>
              <ProfileTitle title="비밀번호" />
              <div>
                <Button text="비밀번호 변경" event={pwPage} />
              </div>
            </StyledView>
            <ProfileTitle title="회원 탈퇴" />
            <StyledFlexWrap>
              <p>
                회원 탈퇴 시 기존 정보를 다시 복구시킬 수 없습니다. <br />
                그래도 정말 회원 탈퇴를 원하시나요 ?
              </p>
              <Button text="탈퇴" event={accountPage} />
            </StyledFlexWrap>
          </>
        );
      case 2:
        return <PwChange setPage={setPage} />;
      case 3:
        return <Account setPage={setPage} />;
      default:
        return null;
    }
  };

  return (
    <Main type="profile">
      <Nav />
      <StyledWrap>{renderPageStep(page)}</StyledWrap>
    </Main>
  );
}

export default Profile;

const StyledWrap = styled.section`
  width: 100%;
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

const StyledView = styled.div`
  // div {
  //   display: flex;
  // }
`;
