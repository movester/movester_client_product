import React from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';
import Nav from '../components/common/Nav';

function Record() {
  return (
    <Main type="profill">
      <Nav />
      <StyledTest>
        <p>저는 기록입니다</p>
      </StyledTest>
    </Main>
  );
}

export default Record;

const StyledTest = styled.div`
  width: 100%;
`;
