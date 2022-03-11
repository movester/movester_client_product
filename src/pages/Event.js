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

      <ContentWrap className="winner-announce hidden">
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

      <ContentWrap className="closed hidden">
        <Item>
          <Title>closed 출석왕 포인트 대결</Title>
          <Detail>
            <ImageWrap>
              <ImageLetter>마감</ImageLetter>
              <StyledImg className="dark" src="/assets/stretching-list.png" alt="이벤트 대표 이미지" />
            </ImageWrap>
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
            <ImageWrap>
              <ImageLetter>마감</ImageLetter>
              <StyledImg className="dark" src="/assets/stretching-list.png" alt="이벤트 대표 이미지" />
            </ImageWrap>
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

  @media screen and (max-width: 500px) {
    height: 12rem;
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

    @media screen and (max-width: 500px) {
      font-size: 20px;
    }
  }

  & + & {
    margin-left: 2rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 10px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

const ImageWrap = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;

  &.dark {
    filter: brightness(50%);
  }
}

`;

const ImageLetter = styled.span`
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  top: 75%;
  transform: translateY(-50%);
  color: #923737;
  font-size: 10rem;
  font-weight: 700;
  z-index: 1;

  @media screen and (max-width: 430px) {
    font-size: 8rem;
  }
`;

const Wrap = styled.div`
  padding: 2rem 1rem 1rem 1rem;

  @media screen and (max-width: 1100px) {
    width: 100%;
    height: auto;
  }
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
