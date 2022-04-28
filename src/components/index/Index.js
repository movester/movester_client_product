import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WeeklyCard from '../elements/WeeklyCard';

function Index({ weekStretching }) {
  return (
    <>
      <Banner>
        <h2>#1일 #1스트레칭 #습관 만들기</h2>
        <div className="wrap">
          <h3>Move U, &nbsp; Start U, &nbsp; With me.</h3>
          <div className="banner-wrapper">
            <div className="container">
              <p className="sub-title">Move.</p>
              <p className="content">부담스러운 운동은 NO!</p>

              <p className="sub-title">Start.</p>
              <p className="content">가볍게 스트레칭으로 시작하세요!</p>

              <p className="sub-title">With, Together.</p>
              <p className="content">혼자가 힘들다면 뭅스터와 같이, 함께해요!</p>
            </div>
            <div>
              <img src="/assets/banner.png" alt="뭅스터 캐릭터" />
            </div>
          </div>
        </div>
      </Banner>
      <WeeklyStretching>
        <h2>#일주일 #추천 스트레칭</h2>
        {weekStretching ? (
          <WeeklyCard weekStretching={weekStretching} />
        ) : (
          <Link key="week_stretching" to="/stretching">
            <div>
              <NoWeek src="/assets/week_empty.png" alt="스트레칭 없음" />
            </div>
          </Link>
        )}
      </WeeklyStretching>
      <Service>
        <h2>#뭅스터만의 #힙한 서비스</h2>
        <div className="image-container">
          <Link key="stretching" to="/stretching">
            <ImageWrapper>
              <ItemText>다양한 스트레칭 제공</ItemText>
              <ItemImage src="/assets/bottom-stretching.png" alt="스트레칭" />
            </ImageWrapper>
          </Link>
          <Link key="record" to="/mypage/record">
            <ImageWrapper>
              <ItemText>기록 변화</ItemText>
              <ItemImage src="/assets/bottom-record.png" alt="기록 변화" />
            </ImageWrapper>
          </Link>
          <a href="https://open.kakao.com/o/gtZLyR0c" target="_blank" rel="noreferrer">
            <ImageWrapper>
              <ItemText>카톡 알림</ItemText>
              <ItemImage src="/assets/bottom-kakao.png" alt="카톡 알림" />
            </ImageWrapper>
          </a>
        </div>
      </Service>
    </>
  );
}

Index.propTypes = {
  weekStretching: PropTypes.arrayOf(PropTypes.object),
};

Index.defaultProps = {
  weekStretching: null,
};

export default Index;

const Banner = styled.section`
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to top, #e5e4f0 1%, #ffffff);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin: 45px 0;

    @media screen and (max-width: 600px) {
      margin-top: 20px;
      font-size: 24px;
    }
  }

  h3 {
    font-size: 3.5rem;
    font-weight: 700;
    color: #9993c6;
    margin: 0 0 50px 0;
    @media screen and (max-width: 600px) {
      font-size: 32px;
    }
  }

  .banner-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;

    margin-bottom: 45px;
    font-weight: 700;

    .container {
      display: flex;
      flex-direction: column;
      text-align: left;
      .title {
        font-size: 28px;
        margin-bottom: 40px;
      }

      .sub-title {
        font-size: 20px;
        margin-bottom: 10px;
      }

      .content {
        font-size: 18px;
        margin-bottom: 40px;
        @media (max-width: 600px) {
          line-height: 24px;
        }
      }
    }
  }

  img {
    width: 200px;
  }

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
`;

const WeeklyStretching = styled.section`
  text-align: center;
  padding: 60px 5rem 40px;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin-bottom: 30px;

    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }
`;

const Service = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background: rgba(229, 229, 229, 0.6);
  padding: 60px 5rem;
  @media screen and (max-width: 600px) {
    padding: 60px 1rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin-bottom: 30px;

    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  }

  .image-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 100px;
    padding: 0 5rem;

    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 30px;
      justify-self: center;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
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
 }
`;

const ItemText = styled.span`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1;
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
