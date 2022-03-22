import React from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';
import MoveLink from '../components/common/MoveLink';

function NotFound() {
  return (
    <Main type="profile">
      <StyledNotFound>
        <p className="not-pound-title">Page Not Pound</p>
        <p className="not-pound-title-bottom">존재하지 않는 페이지입니다!</p>
        <img src="/assets/sorry.png" alt="잠시후 다시 시도해 주세요" />
        <MoveLink text="스트레칭 페이지로 이동하시겠습니까?" btnText="스트레칭 보러가기" address="/stretching" />
      </StyledNotFound>
    </Main>
  );
}

export default NotFound;

const StyledNotFound = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // p {
  //   margin-top: 20px;
  //   font-size: 1.2rem;
  //   font-weight: bold;
  // }
  .not-pound-title {
    font-size: 2rem;
    font-weight: bold;
  }
  .not-pound-title-bottom {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  img {
    margin: 50px 0;
  }
`;
