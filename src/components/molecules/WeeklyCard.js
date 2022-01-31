import React from 'react';
import styled from 'styled-components';

function WeeklyCard() {
  return (
    <WeeklyCardWrapper>
      {/* TODO: 첫번째 두번째 카드 margin-right 처리 안되는 부분 해결하고, 중복 요소 리팩토링 */}
      <WeeklyCardContainer style={{ marginRight: '10px' }}>
        <h3>MON</h3>
        <img src="/assets/stretching.png" alt="스트레칭" />
      </WeeklyCardContainer>
      <WeeklyCardContainer>
        <h3>TUE</h3>
        <img src="/assets/stretching.png" alt="스트레칭" />
      </WeeklyCardContainer>
      <WeeklyCardContainer>
        <h3>WED</h3>
        <img src="/assets/stretching.png" alt="스트레칭" />
      </WeeklyCardContainer>
      <WeeklyCardContainer>
        <h3>THU</h3>
        <img src="/assets/stretching.png" alt="스트레칭" />
      </WeeklyCardContainer>
      <WeeklyCardContainer>
        <h3>FRI</h3>
        <img src="/assets/stretching.png" alt="스트레칭" />
      </WeeklyCardContainer>
      <WeeklyCardContainer>
        <h3>SAT</h3>
        <img src="/assets/stretching.png" alt="스트레칭" />
      </WeeklyCardContainer>
      <WeeklyCardContainer>
        <h3>SUN</h3>
        <img src="/assets/stretching.png" alt="스트레칭" />
      </WeeklyCardContainer>
    </WeeklyCardWrapper>
  );
}

export default WeeklyCard;

const WeeklyCardWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  cursor: pointer;
`;

const WeeklyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 20px;
    font-weight: 700;
    color: rgba(42, 21, 152, 1);
    margin-bottom: 6px;
  }

  & + & {
    margin-right: 10px;
  }
`;
