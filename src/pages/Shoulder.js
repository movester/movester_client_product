import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import Main from '../components/common/Main';
import Nav from '../components/common/Nav';
import { GrayBg } from '../components/elements/GrayBg';
import Button from '../components/elements/Button';
import MoveLink from '../components/common/MoveLink';
import Ruler from '../components/record/Ruler';
import Graph from '../components/record/Graph';
import { fetchAddRecordThunk, fetchModifyRecordThunk, fetchUserRecordByType } from '../store/user/userAsyncThunk';
import { initializeRecord } from '../store/user/userSlice';

function Shoulder() {
  const { detailRecord } = useSelector(({ user }) => user);
  const [record, setRecord] = useState(0);
  const [message, setMessage] = useState('');
  const [shoulerRecord, setShoulerRecord] = useState(true);
  const dispatch = useDispatch();

  console.log('shoulder', detailRecord);

  const addRecord = () => {
    console.log('클릭이벤트');
    if (record === 0) {
      alert('기록을 입력해주세요.');
      return;
    }
    if (detailRecord) {
      // TODO: 기록 수정하는 기준 수정 필요
      dispatch(fetchModifyRecordThunk({ type: 1, record }));
    }
    dispatch(fetchAddRecordThunk({ type: 1, record }));
    setShoulerRecord(false);
  };

  const toggle = () => setShoulerRecord(true);

  useEffect(() => {
    // 컴포넌트 첫 렌더링 시 어깨 부위 기록 API 호출 - 어깨 type 1
    dispatch(fetchUserRecordByType({ type: 1 }));

    return () => dispatch(initializeRecord());
  }, []);

  return (
    <Main type="record">
      <Nav />
      <StyledWrap>
        <p className="title">어깨 유연성 기록</p>
        <StyledCheckRecord>
          <Graph records={detailRecord?.slice().reverse()} type="shoulder" />
          <div>
            {shoulerRecord ? (
              <>
                <p className="title">오늘의 어깨 유연성 기록하기</p>
                <div className="ruler-wrap">
                  <Ruler record={record} message={message} setRecord={setRecord} setMessage={setMessage} />
                  <Button type="wide" event={addRecord} />
                </div>
              </>
            ) : (
              <>
                <p className="title">멋저요! 오늘도 어깨 유연성을 기록했습니다.</p>
                <div className="ruler-send">
                  <Button type="search" text={`${record}cm`} event={toggle} />
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
          <p className="title">어깨 유연성 측정법</p>
          <img src="/assets/shoulder1.png" alt="어깨 유연성 측정법1" />
          <img src="/assets/shoulder2.png" alt="어깨 유연성 측정법2" />
          <p className="ft-text">정연이가 평균 사람들은 몇인지 자료를 조사해다줄거에용!</p>
        </GrayBg>
        <GrayBg>
          <p className="title">연령대별 어깨 유연성 평균치</p>
          <img src="/assets/shoulder1.png" alt="어깨 유연성 측정법1" />
          <img src="/assets/shoulder2.png" alt="어깨 유연성 측정법2" />
          <p className="ft-text">대한민국 보통 사람은 이정도가 나와요~!!</p>
        </GrayBg>
      </StyledWrap>
    </Main>
  );
}

export default Shoulder;

const StyledWrap = styled.section`
  width: 100%;
  .title {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
  }
  .gray-bg {
    text-align: center;
    margin: 40px 0;
    &:last-child {
      margin: 0 0;
    }
    img {
      margin-top: 10px;
    }
    img + img {
      margin-left: 10%;
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
  @media screen and (max-width: 768px) {
    flex-flow: column;
    align-items: start;
    padding: 0;
  }
  & > div {
    width: 50%;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  .graph {
    height: 300px;
    background-color: gray;
    margin-right: 10%;
    @media screen and (max-width: 768px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
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
