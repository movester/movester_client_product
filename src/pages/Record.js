import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Main from '../components/common/Main';
import Nav from '../components/common/Nav';
import { GrayBg, StyledGrayBg } from '../components/elements/GrayBg';
import Button from '../components/elements/Button';
import MoveLink from '../components/common/MoveLink';

function Record() {
  return (
    <Main type="record">
      <Nav />
      <StyledWrap>
        <StyledGrayWrap>
          <p>왜 스트레칭 기록이 필요할까요?</p>
          <p>그건 저도 모릅니다. 하지만 표정연씨가 쓰고싶다 하시니 일단 적어놓겠습니다. 기록의 힘든 대단하니까요!</p>
        </StyledGrayWrap>
        <p className="record-owner">조나현님의 지난 기록</p>
        <div className="graph-wrap">
          <div className="graph-one">
            <Button type="search" text="어깨" />
            <div className="graph" />
            <Link to="/profill/record/myrecord">
              <p>오늘의 어깨 기록하러가기 {'>'}</p>
            </Link>
          </div>
          <div className="graph-one">
            <Button type="search" text="허리 &#183; 다리" />
            <div className="graph" />
            <p>오늘의 허리 &#183; 다리 기록하러가기 {'>'}</p>
          </div>
        </div>

        <GrayBg>
          <p>대한민국 보통 사람은 이정도가 나와요~!!</p>
          <p>정연이가 평균 사람들은 몇인지 자료를 조사해다줄거에용!</p>
          <MoveLink text="기록이 부진하신가요?" btnText="스트레칭 하러가기" address="/stretching" />
        </GrayBg>
      </StyledWrap>
    </Main>
  );
}

export default Record;

const StyledWrap = styled.section`
  width: 100%;
  text-align: center;
  .record-owner {
    text-align: left;
    color: ${({ theme }) => theme.darkPurple};
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
  }

  .graph-wrap {
    display: flex;
    padding: 0 5%;
    .graph-one {
      width: 50%;
      &:last-child {
        margin-left: 50px;
      }
      .search {
        width: 120px;
        height: 40px;
        line-height: 40px;
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
        & + & {
          margin-left: 20px;
        }
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
  p:first-child {
    font-size: 18px;
  }
  p:last-child {
    font-size: 14px;
    margin-top: 10px;
  }
`;
