// import React, { useState } from 'react';
import React from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';

function Event() {
  // const [activeLi, setActiveLi] = useState('progress');
  return (
    <Main>
      <StyledNav>
        <ul>
          <StyledLi className="active">진행중</StyledLi>
          <StyledLi>당첨자발표</StyledLi>
          <StyledLi>마감</StyledLi>
        </ul>
        <p>MOVESTER에서만 제공하는 다양한 이벤트</p>
        <p>함께 스트레칭하며 다양한 활동을 경험해보세요!</p>
      </StyledNav>
      <ContentWrap className="progress">
        <Item>
          <Title>출석왕 포인트 대결</Title>
          <Detail>
            <StyledImg src="/assets/stretching-list.png" alt="이벤트 대표 이미지" />
            <Wrap>
              <Date>기간 : 2021.05.01 ~ 2021.05.31</Date>
              <Content>
                매달 진행하는 뭅스터만의 출석이벤트. <br />
                매일 출석 도장을 통해 포인트를 쌓아보세요! <br />
                전신 · 코어 · 상체 · 하체 부위별 10포인트를 적립해드립니다. <br />
                하루 최대 40포인트를 적립하여 뭅스터 출석왕이 되보세요! <br />
                출석왕을 위해 뭅스터는 선물을 준비한답니다.
              </Content>
            </Wrap>
          </Detail>
        </Item>
        <Item>
          <Title>출석왕 포인트 대결</Title>
          <Detail>
            <StyledImg src="/assets/stretching-list.png" alt="이벤트 대표 이미지" />
            <Wrap>
              <Date>기간 : 2021.05.01 ~ 2021.05.31</Date>
              <Content>
                매달 진행하는 뭅스터만의 출석이벤트. <br />
                매일 출석 도장을 통해 포인트를 쌓아보세요! <br />
                전신 · 코어 · 상체 · 하체 부위별 10포인트를 적립해드립니다. <br />
                하루 최대 40포인트를 적립하여 뭅스터 출석왕이 되보세요! <br />
                출석왕을 위해 뭅스터는 선물을 준비한답니다.
              </Content>
            </Wrap>
          </Detail>
        </Item>
      </ContentWrap>

      <ContentWrap className="winner-announce">
        <Item>
          <Title>winner 출석왕 포인트 대결</Title>
          <Detail>
            <StyledImg src="/assets/stretching-list.png" alt="이벤트 대표 이미지" />
            <Wrap>
              <Date>기간 : 2021.05.01 ~ 2021.05.31</Date>
              <Content>
                매달 진행하는 뭅스터만의 출석이벤트. <br />
                매일 출석 도장을 통해 포인트를 쌓아보세요! <br />
                전신 · 코어 · 상체 · 하체 부위별 10포인트를 적립해드립니다. <br />
                하루 최대 40포인트를 적립하여 뭅스터 출석왕이 되보세요! <br />
                출석왕을 위해 뭅스터는 선물을 준비한답니다.
              </Content>
            </Wrap>
          </Detail>
        </Item>
        <Item>
          <Title>winner 출석왕 포인트 대결</Title>
          <Detail>
            <StyledImg src="/assets/stretching-list.png" alt="이벤트 대표 이미지" />
            <Wrap>
              <Date>기간 : 2021.05.01 ~ 2021.05.31</Date>
              <Content>
                매달 진행하는 뭅스터만의 출석이벤트. <br />
                매일 출석 도장을 통해 포인트를 쌓아보세요! <br />
                전신 · 코어 · 상체 · 하체 부위별 10포인트를 적립해드립니다. <br />
                하루 최대 40포인트를 적립하여 뭅스터 출석왕이 되보세요! <br />
                출석왕을 위해 뭅스터는 선물을 준비한답니다.
              </Content>
            </Wrap>
          </Detail>
        </Item>
      </ContentWrap>

      <ContentWrap className="closed">
        <Item>
          <Title>closed 출석왕 포인트 대결</Title>
          <Detail>
            <StyledImg src="/assets/stretching-list.png" alt="이벤트 대표 이미지" />
            <Wrap>
              <Date>기간 : 2021.05.01 ~ 2021.05.31</Date>
              <Content>
                매달 진행하는 뭅스터만의 출석이벤트. <br />
                매일 출석 도장을 통해 포인트를 쌓아보세요! <br />
                전신 · 코어 · 상체 · 하체 부위별 10포인트를 적립해드립니다. <br />
                하루 최대 40포인트를 적립하여 뭅스터 출석왕이 되보세요! <br />
                출석왕을 위해 뭅스터는 선물을 준비한답니다.
              </Content>
            </Wrap>
          </Detail>
        </Item>
        <Item>
          <Title>closed 출석왕 포인트 대결</Title>
          <Detail>
            <StyledImg src="/assets/stretching-list.png" alt="이벤트 대표 이미지" />
            <Wrap>
              <Date>기간 : 2021.05.01 ~ 2021.05.31</Date>
              <Content>
                매달 진행하는 뭅스터만의 출석이벤트. <br />
                매일 출석 도장을 통해 포인트를 쌓아보세요! <br />
                전신 · 코어 · 상체 · 하체 부위별 10포인트를 적립해드립니다. <br />
                하루 최대 40포인트를 적립하여 뭅스터 출석왕이 되보세요! <br />
                출석왕을 위해 뭅스터는 선물을 준비한답니다.
              </Content>
            </Wrap>
          </Detail>
        </Item>
      </ContentWrap>
    </Main>
  );
}

export default Event;

const StyledNav = styled.nav`
  width: 100%;
  height: 10rem;
  padding: 2rem 5rem;
  background: ${({ theme }) => theme.lightPurple};
  text-align: center;

  ul {
    margin-bottom: 2rem;
  }

  p {
    font-size: 16px;
    color: #ffffff;
    margin-top: 0.5rem;
    font-weight: 700;
  }
`;

const StyledLi = styled.li`
  display: inline;
  font-size: 20px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 700;

  &.active {
    font-size: 24px;
    color: ${({ theme }) => theme.darkPurple};
  }

  & + & {
    margin-left: 2rem;
  }
`;

const ContentWrap = styled.div`
  height: auto;
  width: 100%;
  padding: 3rem 20%;

  &.winner-announce,
  &.closed {
    display: none;
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
  display: flex;
`;

const Title = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background: ${({ theme }) => theme.lightGray};
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.darkPurple};
  margin-bottom: 1rem;
  text-align: center;
`;

const StyledImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 10px;
`;

const Wrap = styled.div`
  padding: 2rem;
`;

const Date = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.darkPurple};
  margin-bottom: 2rem;
`;

const Content = styled.p`
  font-size: 16px;
`;
