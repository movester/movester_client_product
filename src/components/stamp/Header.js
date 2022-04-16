import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <>
      <StyledP>매달 진행하는 뭅스터만의 특별한 출석이벤트!</StyledP>
      <StyledP>
        매일 스트레칭 한 부위에 따라 포인트가 주어집니다! 가장 많은 점수를 받은 사람을 위해 매달 말 뭅스터는 특별한
        선물을 준비해요!
      </StyledP>
      <StyledP>하루당 10점의 포인트가 적립됩니다.</StyledP>
    </>
  );
}

export default Header;

const StyledP = styled.p`
  text-align: left;
  line-height: 22px;
  :first-child {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
    margin-bottom: 10px;
  }
`;
