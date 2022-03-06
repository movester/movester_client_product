import React from 'react';
import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

function Loading() {
  return (
    <StyledLoading>
      <RotatingLines width="70" />
    </StyledLoading>
  );
}

export default Loading;

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
