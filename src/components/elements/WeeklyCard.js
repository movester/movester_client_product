import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function WeeklyCard({ weekStretching }) {
  return (
    <WeeklyCardWrapper>
      {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUM'].map((day, index) => (
        <WeeklyCardContainer>
          <h3>{day}</h3>
          <img
            src={`https://movester-bucket.s3.ap-northeast-2.amazonaws.com/${weekStretching[index]}.png`}
            alt="스트레칭"
          />
        </WeeklyCardContainer>
      ))}
    </WeeklyCardWrapper>
  );
}

WeeklyCard.propTypes = {
  weekStretching: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default WeeklyCard;

const WeeklyCardWrapper = styled.div`
  display: grid;
  height: 270px;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
  cursor: pointer;
`;

const WeeklyCardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr;
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 405px) {
    width: 100%;

    img {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;
