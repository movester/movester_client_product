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
          <p>SERVICE</p>
          <img src="/assets/service.png" alt="서비스 정보" />
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
      max-width: 655px;
      width: 100%;
    }
    P {
      color: #897dc6;
      font-size: 28px;
      margin-bottom: 40px;
    }
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
`;
