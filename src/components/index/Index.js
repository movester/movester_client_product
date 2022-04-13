import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import WeeklyCard from '../elements/WeeklyCard';

function Index({ weekStretching }) {
  return (
    <>
      <Banner>
        <h2>#1일 #1스트레칭 #습관 만들기</h2>
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
            <img src="/assets/banner.png" alt="뭅스터 캐릭터" />
          </div>
        </div>
      </Banner>
      <WeeklyStretching>
        <h2>#일주일 #추천 스트레칭</h2>
        {weekStretching ? (
          <WeeklyCard />
        ) : (
          <div>
            <NoWeek src="/assets/week_empty.png" alt="스트레칭 없음" />
          </div>
        )}
      </WeeklyStretching>
      <Service>
        <h2>#뭅스터만의 #힙한 서비스</h2>
        <div className="image-container">
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

Index.propTypes = {
  weekStretching: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Index;

const Banner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(229, 229, 229, 0.6);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin: 45px 0;
  }

  .banner-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 150px;
    margin-bottom: 45px;

    .container {
      display: flex;
      flex-direction: column;
      .title {
        font-size: 2.5rem;
        margin-bottom: 20px;
      }

      .sub-title {
        font-size: 1.8rem;
        margin-bottom: 20px;
      }

      .content {
        font-size: 1.2rem;
        margin-bottom: 20px;
      }
    }
  }

  img {
    width: 300px;
  }

  @media (max-width: 600px) {
    padding: 3rem;
  }
`;

const WeeklyStretching = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin-bottom: 30px;
  }
`;

const Service = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: rgba(229, 229, 229, 0.6);
  padding: 30px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin-bottom: 30px;
  }

  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: space-between;
  width: 200px;
  height: 200px;
  margin: 10px;
  border: none;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.darkGray};
    color: #fff;
  }

  & + & {
    margin-left: 100px;
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

const NoWeek = styled.img`
  width: 100%;
  height: 300px;
`;
