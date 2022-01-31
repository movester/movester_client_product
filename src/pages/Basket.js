import React from 'react';
import styled from 'styled-components';
import Main from '../components/utils/Main';
import Nav from '../components/utils/Nav';
import MoveLink from '../components/utils/MoveLink';

function Basket() {
  const BasketArr = [];
  return (
    <Main type="profill">
      <Nav />
      <StyledWrap>
        {BasketArr.length ? null : (
          <div className="not-Basket">
            <img src="/assets/sorry.png" alt="스트레칭 없음" />
            <p>찜한 스트레칭이 없습니다!</p>
            <MoveLink text="아직 찜한 스트레칭이 없으신가요?" btnText="스트레칭 보러가기" address="/stretching" />
          </div>
        )}
      </StyledWrap>
    </Main>
  );
}

export default Basket;

const StyledWrap = styled.section`
  width: 100%;

  .not-Basket {
    margin-top: 50px;
    text-align: center;
    p {
      margin-top: 20px;
    }
  }
`;
