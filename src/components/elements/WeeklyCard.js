import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function WeeklyCard({ weekStretching }) {
  return (
    <WeeklyCardWrapper>
      {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
        <Link key={day} to={`/stretching/detail/${weekStretching[index].stretchingIdx}`}>
          <WeeklyCardContainer>
            <h3>{day}</h3>
            <img
              src={`https://movester-bucket.s3.ap-northeast-2.amazonaws.com/${weekStretching[index].image}.png`}
              alt="스트레칭"
            />
          </WeeklyCardContainer>
        </Link>
      ))}
    </WeeklyCardWrapper>
  );
}

WeeklyCard.propTypes = {
  weekStretching: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeeklyCard;

const WeeklyCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: auto;
  column-gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
  cursor: pointer;

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 30px;
    justify-self: center;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 30px;
  }
`;

const WeeklyCardContainer = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    line-height: 24px;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
}
`;
