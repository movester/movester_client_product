import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

function StretchingDetail({ stretching, isAuth, handleDifficulty, userDifficulty }) {
  const user = useSelector(state => state.auth?.user?.name);

  useEffect(() => {
    window.scrollTo({ top: window.localStorage.getItem('scrollY'), behavior: 'smooth' });
  }, []);

  return (
    <Content>
      <StyledPre dangerouslySetInnerHTML={{ __html: stretching.contents }} />
      {isAuth && (
        <ScoreResearch>
          <p>뭅스터와 함께 스트레칭을 따라해보셨나요?</p>
          <p>{user}님께서 느낀 스트레칭의 강도를 표시해주세요!</p>
          <p className="gray">* 강도 변경시, 기존 강도가 삭제되며 한 스트레칭당 하나의 강도만 저장됩니다.</p>
          <ReactStars
            count={5}
            onChange={score => {
              window.localStorage.setItem('scrollY', window.scrollY);
              handleDifficulty(score);
            }}
            size={24}
            emptyIcon={<i className="far fa-star" />}
            fullIcon={<i className="fa fa-star" />}
            value={userDifficulty}
            activeColor="#fc0"
          />
        </ScoreResearch>
      )}
      <RecommendBox>
        <p>
          <span className="black">훌륭해요!</span> 오늘도 뭅스터와 함께 스트레칭을 해냈습니다!
        </p>
        <p>
          출석도장을 찍어 이벤트에 참여해보세요.
          <Link key="toAttend" to={isAuth ? '/mypage/stamp' : '/login'}>
            <span> 출석도장 찍으러 가기</span>
          </Link>
        </p>
        <p>
          유연성 기록을 통해 변화되는 자신의 모습을 관찰해보세요.
          <Link key="toRecord" to={isAuth ? '/mypage/record' : '/login'}>
            <span> 기록하러가기</span>
          </Link>
        </p>
      </RecommendBox>
    </Content>
  );
}

StretchingDetail.propTypes = {
  stretching: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ])
  ).isRequired,
  isAuth: PropTypes.bool.isRequired,
  handleDifficulty: PropTypes.func.isRequired,
  userDifficulty: PropTypes.number,
};

StretchingDetail.defaultProps = {
  userDifficulty: 0,
};

export default StretchingDetail;

const Content = styled.section`
  height: auto;
  padding: 3rem 5rem;

  @media screen and (max-width: 600px) {
    padding: 1rem;
  }
`;

const StyledPre = styled.pre`
  line-height: 25px;
  text-align: center;
  @media (max-width: 600px) {
    overflow: scroll;
  }

  img {
    @media (max-width: 1200px) {
      width: 33%;
    }

    @media (max-width: 600px) {
      width: 80%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 30px 0 30px 10%;
      height: auto;
      justify-content: space-around;
    }
  }
`;

const ScoreResearch = styled.section`
  background: ${({ theme }) => theme.lightGray};
  border-radius: 30px;
  height: auto;
  margin: 2rem 15%;
  padding: 2rem;

  p {
    margin-bottom: 15px;

    &.gray {
      font-size: 12px;
      color: gray;
    }
  }

  @media (max-width: 600px) {
    margin: 2rem 0;
  }
`;

const RecommendBox = styled.section`
  background: ${({ theme }) => theme.lightGray};
  border-radius: 30px;
  text-align: center;
  height: auto;
  margin: 2rem 15%;
  padding: 2rem;

  p {
    margin-bottom: 15px;
  }

  span {
    color: #2a1598;
    font-weight: 800;
    &.black {
      color: #000000;
    }
  }

  @media (max-width: 600px) {
    margin: 2rem 0;
  }
`;
