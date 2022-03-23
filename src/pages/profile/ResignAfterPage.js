import React from 'react';
import styled from 'styled-components';
import TitleWrapper from '../../components/common/TitleWrapper';

function ResignAfterPage() {
  return (
    <TitleWrapper title="Bye MOVESTER">
      <Image src="/assets/back.png" alt="이미지" />
      <StyledP>계정이 정상적으로 탈퇴되었습니다.</StyledP>
      <StyledP>
        나중에라도 <span>MOVESTER</span> 가 생각난다면
      </StyledP>
      <StyledP>다시 놀러오세요!</StyledP>
    </TitleWrapper>
  );
}

export default ResignAfterPage;

const Image = styled.img`
  width: 100px;
  height: auto;
  margin: 20px 0 10px 0;
`;

const StyledP = styled.p`
  margin: 8px 0;

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
  }
`;
