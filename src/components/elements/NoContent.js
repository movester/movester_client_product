import React from 'react';
import styled from 'styled-components';

function NoContent() {
  return (
    <StyledDiv>
      <div>
        <img src="/assets/sorry.png" alt="스트레칭 없음" />
        <p className="tall-text">조건에 맞는 스트레칭이 없습니다.</p>
        <p>서둘러 스트레칭을 추가하겠습니다!</p>
      </div>
    </StyledDiv>
  );
}

export default NoContent;

const StyledDiv = styled.div`
  position: relative;
  height: 60vh;
  text-align: center;
  p {
    margin: 10px 0;
  }
  div {
    position: absolute;
    top: 25%;
    left: 45%;
  }
`;
