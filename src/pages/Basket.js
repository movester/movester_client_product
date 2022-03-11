import React from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';
import Nav from '../components/common/Nav';
import MoveLink from '../components/common/MoveLink';

function Basket() {
  const BasketArr = [];
  return (
    <Main type="profill">
      <Nav />
      <StyledWrap>
        {BasketArr.length ? null : (
          <div className="not-Basket">
            <img src="/assets/sorry.png" alt="스트레칭 없음" />
            <p className="tall-text">찜한 스트레칭이 없습니다!</p>
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
    .tall-text {
      font-size: 18px;
    }
    p {
      margin-top: 20px;
    }
  }
`;
