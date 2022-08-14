import React from 'react';
import styled from 'styled-components';

function Error() {
  return (
    <StyledError className="error">
      <img src="/assets/sorry.png" alt="잠시후 다시 시도해 주세요" />
      <p>세션이 만료되었습니다. 다시 로그인해주세요!</p>
    </StyledError>
  );
}

export default Error;

const StyledError = styled.div`
  width: 100%;
  p {
    margin-top: 20px;
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
