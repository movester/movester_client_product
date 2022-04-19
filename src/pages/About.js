import React from 'react';
import styled from 'styled-components';

import Main from '../components/common/Main';

function About() {
  return (
    <Main>
      <StyledAboutWrap>
        <StyledTitle>
          <p>&#34;나&#34;를 위한 작은 움직임</p>
          <p>MOVE U, START U, WITH ME</p>
        </StyledTitle>
        <Styledposture>
          <img src="/assets/posture1.png" alt="어깨스트레칭" />
          <img src="/assets/posture2.png" alt="허리 스트레칭" />
          <img src="/assets/posture3.png" alt="스트레칭" />
        </Styledposture>

        <StyledMiddle>
          <p>
            바쁜 일상을 살다보면 &#34;나&#34;를 위해 시작한 일상 중<br /> &#34;나&#34;라는 존재는 잊혀질 때가 많습니다.
          </p>
          <p>
            몸이 힘들다고 말해주기 전<br />
            먼저 <span>몸과 마음을 위한 시간</span>을 틈틈이 만들어가는건 어떨까요?
          </p>
          <p>누구나, 어디서든, 가볍게 할 수 있는 스트레칭으로 한걸음씩 함께 나아가요.</p>
        </StyledMiddle>
        <div className="service-information">
          <h1>SERVICE</h1>
          <Grid>
            <img src="/assets/stretching_ex.png" alt="서비스 정보" />
            <Contents>
              <Title>맞춤 스트레칭 검색 기능</Title>
              <p>신체부위별로 원하는 스트레칭을 찾아볼 수 있도록</p>
              <p>홈페이지를 제작하였습니다.</p>
              <p>내가 원하는 스트레칭을 손쉽게 찾아보세요.</p>
            </Contents>
          </Grid>
          <Grid>
            <img src="/assets/week_recommend.png" alt="서비스 정보" />
            <Contents>
              <Title>매주 달라지는 일주일 추천 스트레칭</Title>
              <p>나에게 딱 맞는 스트레칭을 고르기 귀찮다면,</p>
              <p>뭅스터가 추천하는 일주일 스트레칭을 따라해보아요!</p>
              <p>현대인에게 딱인 스트레칭들로만 골랐답니다.</p>
            </Contents>
          </Grid>

          <Grid>
            <img src="/assets/like_ex.png" alt="서비스 정보" />
            <Contents>
              <Title>찜한 스트레칭 리스트</Title>
              <p>나에게 필요한 스트레칭만 골라 찜 리스트에 담아보세요!</p>
              <p>오로지 나만을 위한 맞춤형 스트레칭 공간입니다.</p>
            </Contents>
          </Grid>
          <Grid>
            <img src="/assets/attemp_ex.png" alt="서비스 정보" />
            <Contents>
              <Title>매달 진행하는 출석 이벤트</Title>
              <p>매일 뭅스터와 함께 스트레칭하며, 출석 도장을 찍어보세요.</p>
              <p>매달 말일, 출석왕을 위해 뭅스터가 특별한 선물을 준비했어요!</p>
            </Contents>
          </Grid>
          <Grid>
            <img src="/assets/record_ex.png" alt="서비스 정보" />
            <Contents>
              <Title>유연성 셀프 측정 및 기록시스템</Title>
              <p>유연성 유지 및 향상은 몸 건강의 지표입니다.</p>
              <p>꾸준한 기록을 통해 어제보다 나은 오늘의 나를 위해</p>
              <p>함께 나아가요.</p>
            </Contents>
          </Grid>
        </div>
      </StyledAboutWrap>
    </Main>
  );
}
export default About;

const StyledAboutWrap = styled.section`
  max-width: 1024px;
  min-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 50px 5%;
  text-align: center;
  .service-information {
    img {
      width: 250px;
      height: 250px;
      border-radius: 50%;
    }
    h1 {
      font-size: 28px;
      margin: 80px 0 50px 0;
    }
    margin: 0 30%;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 30px;
  p:first-child {
    font-size: 28px;
  }
  p:last-child {
    font-size: 20px;
    margin-bottom: 50px;
  }
  p + p {
    margin-top: 15px;
  }
`;

const Styledposture = styled.div`
  margin-bottom: 30px;
  img {
    width: 100%;
    max-width: 200px;
    margin-right: 5%;
  }
  @media screen and (max-width: 768px) {
    img {
      width: 150px;
      margin-right: 3%;
    }
  }
`;

const StyledMiddle = styled.div`
  p {
    line-height: 30px;
  }
  p:last-child {
    font-weight: 700;
    margin-bottom: 50px;
  }
  & > p + p {
    margin-top: 30px;
  }
  span {
    color: ${({ theme }) => theme.darkPurple};
    font-weight: bold;
  }
  margin-bottom: 50px;
`;

const Grid = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 250px 500px;
  column-gap: 50px;

  & + & {
    margin-top: 70px;
  }
`;

const Contents = styled.div`
  p {
    line-height: 28px;
    font-size: 14px;
    text-align: left;
  }
`;

const Title = styled.h2`
  text-align: left;
  font-size: 22px;
  color: rgba(42, 21, 152, 1);
  font-weight: 700;
  line-height: 80px;
  margin-top: 20px;
`;
