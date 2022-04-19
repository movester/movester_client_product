import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { StyledGrayBg } from '../elements/GrayBg';
import Graph from './Graph';

function Record({ shoulderecords, legRecords }) {
  const userName = useSelector(state => state.auth.user.name);
  return (
    <StyledWrap>
      <p className="record-owner">{userName}님의 지난 기록</p>
      <div className="graph-wrap">
        <div className="graph-one">
          <Link to="/mypage/record/shoulder">
            <StyledButton>어깨</StyledButton>
          </Link>
          <Graph records={shoulderecords} type="shoulder" />
        </div>
        <div className="graph-one">
          <Link to="/mypage/record/leg">
            <StyledButton>허리 &#183; 다리</StyledButton>
          </Link>
          <Graph records={legRecords} type="leg" />
        </div>
      </div>

      <StyledGrayWrap>
        <p>Q. 왜 스트레칭 기록이 필요할까요?</p>
        <GridWrapper>
          <div>
            <p className="title">A1. 동기부여</p>
            <img src="/assets/record/need_1.png" alt="동기부여" />
            <p>유지 또는 변화하는 나의 몸과 기록을 한눈에 확인할 수 있습니다.</p>
            <p>
              <span>뿌듯함</span>을 얻고 꾸준히 나아가는 <span>원동력</span>이 됩니다.
            </p>
          </div>
          <div>
            <p className="title">A2. 몸의 중요한 요소 유연성</p>
            <img src="/assets/record/need_2.png" alt="몸의 중요한 요소 유연성" />
            <p>유연성 향상 시 움직임을 잘 조절하게 되며</p>
            <p>
              1. <span>활동 범위</span>가 넓어집니다.
            </p>
            <p>
              2. <span>부상 빈도</span>가 낮아집니다.
            </p>
            <p>
              3. 몸의 긴장을 낮춰 <span>삶의 질이 향상</span>됩니다.
            </p>
          </div>
        </GridWrapper>
      </StyledGrayWrap>
    </StyledWrap>
  );
}

Record.propTypes = {
  shoulderecords: PropTypes.arrayOf(PropTypes.object).isRequired,
  legRecords: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Record;

const StyledWrap = styled.section`
  width: 100%;
  text-align: center;
  .record-owner {
    text-align: left;
    color: ${({ theme }) => theme.darkPurple};
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
    @media screen and (max-width: 768px) {
      text-align: left;
    }
  }
  .graph-wrap {
    @media screen and (max-width: 768px) {
      flex-flow: column;
      align-items: start;
    }
    display: flex;
    .graph-one {
      width: 50%;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
      &:last-child {
        margin-left: 50px;
        @media screen and (max-width: 768px) {
          margin-left: 0;
          margin-top: 20px;
        }
      }
      .search {
        width: 120px;
        height: 40px;
        line-height: 36px;
      }
      p {
        font-weight: bold;
        color: ${({ theme }) => theme.darkPurple};
      }
      .graph {
        width: 100%;
        height: 300px;
        background-color: gray;
        margin: 20px 0;
      }
    }
  }
  & > .gray-bg {
    margin-top: 20px;
    p {
      margin-bottom: 20px;
      &:first-child {
        font-size: 18px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const StyledGrayWrap = styled(StyledGrayBg)`
  background-color: #ffffff;
  margin-top: 40px;
  p:first-child {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
    margin-bottom: 50px;
  }

  p {
    &.title {
      font-size: 16px;
    }
  }
  p + p {
    margin-top: 10px;
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  img {
    width: 30%;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 60px;
  }
`;

const StyledButton = styled.div`
  box-sizing: border-box;
  width: 130px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  background-color: ${({ theme }) => theme.lightPurple};
  border-radius: 20px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
`;
