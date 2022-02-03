import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';
import Nav from '../components/common/Nav';
import { GrayBg } from '../components/elements/GrayBg';
import Button from '../components/elements/Button';
import MoveLink from '../components/common/MoveLink';

function WaistLeg() {
  const [weistLegRecord, setWeistLegRecord] = useState(true);
  const sendRecord = () => {
    setWeistLegRecord(false);
  };
  return (
    <Main type="record">
      <Nav />
      <StyledWrap>
        <p className="title">허리 &#183; 다리 유연성 기록</p>
        <StyledCheckRecord>
          <div className="graph" />
          <div>
            {weistLegRecord ? (
              <>
                <p className="title">오늘의 허리 &#183; 다리 유연성 기록하기</p>
                <div className="ruler-wrap">
                  <div className="ruler" />
                  <Button event={sendRecord} type="wide" />
                </div>
              </>
            ) : (
              <>
                <p className="title">멋저요! 오늘도 허리 &#183; 다리 유연성을 기록했습니다.</p>
                <div className="ruler-send">
                  <Button type="search" text="40.2cm" />
                  <p>
                    건강한 신체를 위한 한걸음
                    <br />
                    뭅스터와 매일 함께해요!
                  </p>
                </div>
              </>
            )}

            <MoveLink text="기록이 부진하신가요?" btnText="스트레칭 하러가기" address="/stretching" />
          </div>
        </StyledCheckRecord>
        <GrayBg>
          <p className="title">허리 &#183; 다리 유연성 측정법</p>
          <img src="/assets/weistLeg1.png" alt="허리, 다리 유연성 측정법1" />
          <img src="/assets/weistLeg2.png" alt="허리, 다리 유연성 측정법1" />
          <p className="ft-text">정연이가 평균 사람들은 몇인지 자료를 조사해다줄거에용!</p>
        </GrayBg>
        <GrayBg>
          <p className="title">연령대별 허리 &#183; 다리 유연성 평균치</p>
          <img src="/assets/weistLeg1.png" alt="허리, 다리 평균 유연성" />
          <img src="/assets/shoulder2.png" alt="허리, 다리 평균 유연성" />
          <p className="ft-text">대한민국 보통 사람은 이정도가 나와요~!!</p>
        </GrayBg>
      </StyledWrap>
    </Main>
  );
}

export default WaistLeg;

const StyledWrap = styled.section`
  width: 100%;
  // text-align: center;
  .title {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
  }
  .gray-bg {
    text-align: center;
    margin: 20px 0;
    &:last-child {
      margin: 0 0;
    }
    img {
      margin-top: 10px;
    }
    img + img {
      margin-left: 80px;
    }
  }
  .ft-text {
    margin-top: 10px;
  }
`;
const StyledCheckRecord = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 0 20px;
  text-align: center;
  & > div {
    width: 50%;
  }
  .graph {
    height: 300px;
    background-color: gray;
    margin-right: 10%;
  }
  .ruler {
    width: 100%;
    height: 170px;
    margin: 20px 0;
    padding: 0 5px;
    background-color: gray;
  }
  .wide {
    margin-bottom: 15px;
  }
  .ruler-send {
    .search {
      border-radius: 5px;
      margin-top: 30px;
      width: 150px;
      height: 40px;
      line-height: 36px;
    }
    p {
      margin-top: 20px;
      line-height: 40px;
    }
    & + p {
      margin-top: 30px;
    }
  }
`;
