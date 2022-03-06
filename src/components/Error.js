import React from 'react';
import styled from 'styled-components';

function Error() {
  return (
    <StyledError className="error">
      <img src="/assets/sorry.png" alt="잠시후 다시 시도해 주세요" />
      <p>죄송합니다 잠시 후 다시 시도해 주세요...</p>
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
