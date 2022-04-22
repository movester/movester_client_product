import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';

function Event() {
  const [activeMenu, setActiveMenu] = useState('.progress');

  const handleActiveMenu = (e, menu) => {
    e.target.classList.add('active');
    document.querySelector(activeMenu).classList.add('hidden');
    document.querySelector(menu).classList.remove('hidden');
    setActiveMenu(menu);

    ['.progress-menu', '.winner-announce-menu', '.closed-menu'].forEach(li =>
      document.querySelector(li).classList.remove('active')
    );
    e.target.classList.add('active');
  };
  return (
    <Main>
      <StyledNav>
        <ul>
          <StyledLi className="progress-menu active" onClick={e => handleActiveMenu(e, '.progress')}>
            진행중
          </StyledLi>
          <StyledLi className="winner-announce-menu" onClick={e => handleActiveMenu(e, '.winner-announce')}>
            당첨자발표
          </StyledLi>
          <StyledLi className="closed-menu" onClick={e => handleActiveMenu(e, '.closed')}>
            마감
          </StyledLi>
        </ul>
        <p>MOVESTER에서만 제공하는 다양한 이벤트</p>
        <p>함께 스트레칭하며 다양한 활동을 경험해보세요!</p>
      </StyledNav>

      <ContentWrap className="progress">
        <Item>
          <Title>5월 출석왕 포인트 대결</Title>
          <Date>2022.05.01 ~ 2022.05.31</Date>
          <Detail>
            <StyledImg src="/assets/stamp.png" alt="이벤트 대표 이미지" />

            <Content>
              매달 진행하는 뭅스터만의 출석이벤트. <br />
              매일 출석 도장을 통해 포인트를 쌓아보세요! <br />
              출석왕을 위해 뭅스터는 선물을 준비한답니다.
            </Content>
          </Detail>
        </Item>
      </ContentWrap>

      <ContentWrap className="winner-announce hidden">
        <Item>
          <Title>4월 출석왕 포인트 대결</Title>
          <Date>2022.04.01 ~ 2022.04.30</Date>
          <Detail>
            <StyledImg src="/assets/stamp.png" alt="이벤트 대표 이미지" />

            <Content>
              매달 진행하는 뭅스터만의 출석이벤트. <br />
              매일 출석 도장을 통해 포인트를 쌓아보세요! <br />
              출석왕을 위해 뭅스터는 선물을 준비한답니다.
            </Content>
          </Detail>
        </Item>
      </ContentWrap>

      <ContentWrap className="closed hidden">
        <Item>
          <Title>3월 출석왕 포인트 대결</Title>
          <Date>2022.03.01 ~ 2022.03.31</Date>
          <Detail>
            <StyledImg src="/assets/stamp.png" alt="이벤트 대표 이미지" />

            <Content>
              매달 진행하는 뭅스터만의 출석이벤트. <br />
              매일 출석 도장을 통해 포인트를 쌓아보세요! <br />
              출석왕을 위해 뭅스터는 선물을 준비한답니다.
            </Content>
          </Detail>
        </Item>
      </ContentWrap>
    </Main>
  );
}

export default Event;

const StyledNav = styled.nav`
  width: 100%;
  height: 16rem;
  padding: 5rem 5rem;
  background: linear-gradient(to bottom, #e5e4f0 1%, #ffffff);
  text-align: center;

  ul {
    margin-bottom: 3rem;
  }

  p {
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 500px) {
    height: 14rem;
    padding: 5rem 1rem;
  }
`;

const StyledLi = styled.li`
  display: inline;
  font-size: 22px;
  color: #adadad;
  cursor: pointer;
  font-weight: 700;

  &.active {
    color: ${({ theme }) => theme.darkPurple};

    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }

  & + & {
    margin-left: 6rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 18px;
    & + & {
      margin-left: 3rem;
    }
  }
`;

const ContentWrap = styled.div`
  height: auto;
  width: 100%;
  padding: 3rem 22%;

  &.active {
    display: block;
  }

  &.hidden {
    display: none;
  }

  @media screen and (max-width: 600px) {
    padding: 3rem;
  }
`;

const Item = styled.div`
  width: 100%;
  height: auto;

  & + & {
    margin-top: 3rem;
  }
`;

const Detail = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 5fr;
  column-gap: 40px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.lightPurple};
  margin-bottom: 1.5rem;
  text-align: center;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

const Date = styled.p`
  text-align: center;
  font-size: 24px;
  color: ${({ theme }) => theme.lightPurple};
  margin-bottom: 3rem;
  line-height: 30px;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const StyledImg = styled.img`
  width: 150px;
  height: auto;
  justify-self: right;
  @media screen and (max-width: 500px) {
    justify-self: center;
  }
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 28px;
  padding-left: 10%;
  padding-top: 30px;
  @media screen and (max-width: 500px) {
    padding-left: 0;
    text-align: center;
  }
`;
