import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

function StretchingDetail({ stretching, isAuth, handleDifficulty, userDifficulty }) {
  const user = useSelector(state => state.auth?.user?.name);
  return (
    <Content>
      <StyledPre dangerouslySetInnerHTML={{ __html: stretching.contents }} />
      {isAuth ? (
        <ScoreResearch>
          <p>뭅스터와 함께 스트레칭을 따라해보셨나요?</p>
          <p>{user}님께서 느낀 스트레칭의 강도를 표시해주세요!</p>
          <ReactStars
            count={5}
            onChange={handleDifficulty}
            size={24}
            emptyIcon={<i className="far fa-star" />}
            fullIcon={<i className="fa fa-star" />}
            value={userDifficulty}
            activeColor="#fc0"
          />
        </ScoreResearch>
      ) : (
        ''
      )}
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
  userDifficulty: PropTypes.number.isRequired,
};

export default StretchingDetail;

const Content = styled.section`
  height: auto;
  padding: 3rem 5rem;

  @media screen and (max-width: 600px) {
    padding: 3rem;
  }
`;

const StyledPre = styled.pre`
  line-height: 25px;
  text-align: center;
  overflow: scroll;

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
  margin-top: 2rem;
  padding: 2rem;

  p {
    margin-bottom: 15px;
  }
`;
