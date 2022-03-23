import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { GrayBg } from '../elements/GrayBg';
import Button from '../elements/Button';
import MoveLink from '../common/MoveLink';
import Graph from './Graph';
import Ruler from './Ruler';
import ModalPortal from '../common/Modal/ModalPortal';
import ConfirmModal from '../common/Modal/ConfirmModal';

function Leg({
  records,
  record,
  message,
  onSliderChange,
  onInputChange,
  onSliderClick,
  isCreate,
  onCreate,
  onDelete,
  todayRecord,
  errModalOn,
  handleErrModal,
  errMsg,
}) {
  return (
      <StyledWrap>
        <p className="title">허리 &#183; 다리 유연성 기록</p>
        <StyledCheckRecord>
          <Graph records={records}/>
          <div className="create">
          {isCreate ? (
              <>
                <p className="title">멋져요! 오늘도 허리 &#183; 다리 유연성을 기록했습니다.</p>
                <div className="ruler-send">
                <button type="button" className="created-record" disabled>
                  {todayRecord} cm
                </button>
                <FlexContainer>
                  <StyledButton type="button" onClick={onDelete}>
                    삭제하기
                  </StyledButton>
                </FlexContainer>
                <p>건강한 신체를 위한 한걸음</p>
                <p>뭅스터와 매일 함께해요!</p>
              </div>
              </>
            ) : (
              <>
                <p className="title">오늘의 허리 &#183; 다리 유연성 기록하기</p>
              <div className="ruler-wrap">
                <Ruler
                  record={record}
                  message={message}
                  onSliderChange={onSliderChange}
                  onInputChange={onInputChange}
                  onSliderClick={onSliderClick}
                />
                <Button event={onCreate} type="wide" />
              </div>
              </>
            )}

            <MoveLink text="기록이 부진하신가요?" btnText="스트레칭 하러가기" address="/stretching" />
          </div>
        </StyledCheckRecord>
        <GrayBg>
          <p className="title">허리 &#183; 다리 유연성 측정법</p>
          <p className="margin">준비물 : 30cm 자, 또는 줄자</p>
          <p className="margin">손과 발끝 사이의 거리를 측정해주세요.</p>
        <GridWrapper>
          <div>
            <img src="/assets/leg/leg_how_1.png" alt="허리/다리 유연성 측정법1" />
            <p>1) 앉은 상태에서 다리를 곱게 뻗고, 상체를 최대한 앞으로 숙여주세요.</p>
          </div>
          <div>
            <img src="/assets/leg/leg_how_2.png" alt="허리/다리 유연성 측정법2" />
            <p>2) [A] 발 끝에 손이 닿지 않을 경우 (표기법, -측정한 거리)</p>
          </div>
          <div>
            <img src="/assets/leg/leg_how_3.png" alt="허리/다리 유연성 측정법3" />
            <p>3) [B] 발 끝에 손이 닿을 경우 (표기법, +측정한 거리)</p>
          </div>
        </GridWrapper>
        </GrayBg>
        <GrayBg>
          <p className="title">연령대별 허리 &#183; 다리 유연성 평균치</p>
          <img src="/assets/leg/leg_standard.png" alt="허리, 다리 평균 유연성 평균치" />
        </GrayBg>
        {errModalOn && (
        <ModalPortal>
          <ConfirmModal onClose={handleErrModal} title="기록 등록 실패" content={errMsg} />
        </ModalPortal>
      )}
      </StyledWrap>
  );
}

Leg.propTypes = {
  records: PropTypes.arrayOf(PropTypes.object).isRequired,
  record: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onSliderChange: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSliderClick: PropTypes.func.isRequired,
  isCreate: PropTypes.bool.isRequired,
  onCreate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  todayRecord: PropTypes.string.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
};

export default Leg;

const StyledWrap = styled.section`
  width: 100%;
  .title {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
  }
  .margin {
    margin-top: 10px;
  }
  .gray-bg {
    text-align: center;
    margin: 40px 0;
    &:last-child {
      margin: 0 0;
    }
    img {
      margin-top: 10px;
      width: 78%;
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
      margin-bottom: 25px;
    }
  }
  .create {
    padding-top: 30px;
  }
  .ruler-wrap {
    padding: 0 20%;
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
    .created-record {
      width: 100px;
      height: 38px;
      font-size: 1rem;
      color: #2a1598;
      border: 2px solid #2a1598;
      border-radius: 10px;
      padding: 0.3rem;
      margin: 20px 0;
    }

    p {
      margin-top: 10px;
    }
    & + p {
      margin-top: 30px;
    }
  }
`;

const FlexContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 50px;
  justify-content: center;
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  width: 200px;
  height: 40px;
  line-height: 40px;
  background-color: ${({ theme }) => theme.lightPurple};
  border-radius: 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  border: none;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  img {
    width: 100%;
  }
`;