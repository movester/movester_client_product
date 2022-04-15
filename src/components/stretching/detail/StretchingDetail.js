import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactStars from 'react-rating-stars-component';

function StretchingDetail({ stretching, isAuth, handleDifficulty, userDifficulty }) {
  return (
      <Content>
        <StyledPre dangerouslySetInnerHTML={{ __html: stretching.contents }} />
        {isAuth ? (
          <ScoreResearch>
            <p>뭅스터와 함께 스트레칭을 따라해보셨나요?</p>
            <p>조나현님께서 느낀 스트레칭의 강도를 표시해주세요!</p>
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
  padding: 3rem 15%;

  @media screen and (max-width: 600px) {
    padding: 3rem;
  }
`;

const StyledPre = styled.pre`
  padding: 10px;
  min-height: 40px;
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

