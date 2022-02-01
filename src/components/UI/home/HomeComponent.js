import React from 'react';
import styled from 'styled-components';
import WeeklyCard from '../../molecules/WeeklyCard';

function HomeComponent() {
  return (
    <>
      <Banner>
        <h2>#1일 #스트레칭 #습관 만들기</h2>
        <div className="banner-wrapper">
          <div className="container">
            <span className="title">Move U, Start U, With me.</span>
            <span className="sub-title">Move.</span>
            <span className="content">부담스러운 운동은 NO!</span>
            <span className="sub-title">Start.</span>
            <span className="content">가볍게 스트레칭으로 시작하세요!</span>
            <span className="sub-title">With, Together.</span>
            <span className="content">혼자가 힘들다면 뭅스터와 같이, 함께해요!</span>
          </div>
          <div>
            <img src="/assets/charactor.png" alt="뭅스터 캐릭터" />
          </div>
        </div>
      </Banner>
      <WeeklyStretching>
        <h2>#일주일 #추천 스트레칭</h2>
        <WeeklyCard />
      </WeeklyStretching>
      <Service>
        <h2>#뭅스터만의 #힙한 서비스</h2>
        <div style={{ display: 'flex' }}>
          <ImageWrapper>
            <ItemText>다양한 스트레칭 제공</ItemText>
            <ItemImage src="/assets/bottom-stretching.png" alt="스트레칭" />
          </ImageWrapper>
          <ImageWrapper>
            <ItemText>기록 변화</ItemText>
            <ItemImage src="/assets/bottom-record.png" alt="기록 변화" />
          </ImageWrapper>
          <ImageWrapper>
            <ItemText>카톡 알림</ItemText>
            <ItemImage src="/assets/bottom-kakao.png" alt="카톡 알림" />
          </ImageWrapper>
        </div>
      </Service>
    </>
  );
}

export default HomeComponent;

const Banner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(229, 229, 229, 0.6);

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin: 45px 0;
  }

  .banner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 38px;
        margin-bottom: 20px;
      }

      .sub-title {
        font-size: 26px;
        margin-bottom: 20px;
      }

      .content {
        font-size: 20px;
        margin-bottom: 20px;
      }
    }
  }

  img {
    width: 500px;
  }
`;

const WeeklyStretching = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin-bottom: 30px;
  }
`;

const Service = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(229, 229, 229, 0.6);
  padding: 30px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin-bottom: 30px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
  border: 1px solid #000;
  border-radius: 50%;
  background-color: rgba(196, 196, 196, 0.5);
  position: relative;
  cursor: pointer;

  & + & {
    margin: 0 20px;
  }

  &:hover {
    background: rgba(249, 172, 23, 0.74);
    opacity: 1;
  }
`;

const ItemText = styled.span`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1000;
  font-size: 1.4rem;
  font-weight: 700;
  width: 200px;
  text-align: center;
`;

const ItemImage = styled.img`
  border-radius: 70%;
  width: 200px;
  height: 200px;
  opacity: 0.6;
`;