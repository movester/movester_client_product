import React from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';
import Nav from '../components/common/Nav';
import GrayBg from '../components/elements/GrayBg';

function Stamp() {
  return (
    <Main type="profill">
      <Nav />
      <StyledWrap>
        <p className="stamp-title">오늘의 출석 도장 찍기</p>
        <p>4월의 조나현님의 출석 포인트는 120점 입니다.</p>
        <p>연속 10일째 출석중이네요!</p>

        <StyledCalendar>
          <div className="header">
            <span>{'<'}</span>
            <span className="title">2021.04</span>
            <span>{'>'}</span>
          </div>
        </StyledCalendar>
        <GrayBg>
          <p className="ft-first">매달 진행하는 뭅스터만의 특별한 출석이벤트!</p>
          <p className="ft-last">
            매일 스트레칭 한 부위에 따라 포인트가 주어집니다! 가장 많은 점수를 받은 사람을 위해 매달 말 뭅스터는 특별한
            선물을 준비해요!
          </p>
        </GrayBg>
      </StyledWrap>
    </Main>
  );
}

export default Stamp;

const StyledWrap = styled.section`
  width: 100%;
  text-align: center;
  p {
    margin-bottom: 20px;
    font-size: 14px;
  }
  .stamp-title {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
  }
  .ft-first {
    font-size: 18px;
    margin-bottom: 10px;
  }
  .ft-last {
    font-size: 14px;
    margin-bottom: 0;
  }
`;

const StyledCalendar = styled.div`
  width: 450px;
  height: 447px;
  margin: 0 auto 20px;
  background-color: gray;
  padding: 10px 0;
  .header {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    .title {
      font-size: 24px;
    }
  }
`;
