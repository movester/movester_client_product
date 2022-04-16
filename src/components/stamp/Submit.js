import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useAsync from '../../hook/useAsync';
import axios from '../../services/defaultClient';
import Loading from '../common/Loading';
import Error from '../common/Error';

function Submit({ redirect, setRedirect }) {
  const name = useSelector(state => state.auth.user.name);
  const today = new Date();

  const getStamp = async () => {
    const res = await axios.get(`/attend-points?year=${today.getFullYear()}&month=${today.getMonth() + 1}`);
    return res.data.data;
  };

  const [state] = useAsync(getStamp, [redirect]);
  const { data: monthData, loading, error } = state;

  const onClick = async () => {
    try {
      await axios.post('/attend-points');
      setRedirect(!redirect);
    } catch {
      alert('잠시 후 다시 시도해주세요!');
    }
  };

  return (
    <StyledStampSubmit>
      {loading && <Loading />}
      {error && <Error />}
      {monthData && monthData[today.getDate() - 1] === 0 ? (
        <>
          <p className="stamp-title">오늘의 출석 도장 찍기</p>
          {monthData && (
            <p>
              이달의 {name}님의 출석 포인트는 {monthData.filter(el => el === 1).length * 10}점 입니다.
            </p>
          )}
          <StyledButton onClick={onClick} type="button">
            제출하기
          </StyledButton>

          <StyledP className="title">매달 진행하는 뭅스터만의 특별한 출석이벤트!</StyledP>
          <StyledP>매일 스트레칭 한 부위에 따라 포인트가 주어집니다!</StyledP>
          <StyledP> 가장 많은 점수를 받은 사람을 위해 매달 말 뭅스터는 특별한 선물을 준비해요!</StyledP>
          <StyledP>하루당 10점의 포인트가 적립됩니다.</StyledP>
        </>
      ) : (
        <>
          <p className="stamp-title">훌륭해요! 오늘도 출석을 해냈습니다!</p>
          <p>
            건강한 신체를 위한 한걸음, <br />
            뭅스터와 매달 함께해요!
          </p>
        </>
      )}
    </StyledStampSubmit>
  );
}

Submit.propTypes = {
  redirect: PropTypes.bool.isRequired,
  setRedirect: PropTypes.func.isRequired,
};
export default React.memo(Submit);

const StyledStampSubmit = styled.div`
  @media screen and (max-width: 1024px) {
    margin-right: 0;
    margin-top: 30px;
  }

  .stamp-title {
    font-size: 24px;
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
    margin-bottom: 20px;
  }
`;

const StyledButton = styled.button`
  width: 25%;
  max-width: 500px;
  height: 40px;
  margin: 20px 0 50px 0;
  font-weight: bold;
  border-radius: 20px;
  color: #fff;
  background-color: ${({ theme }) => theme.lightPurple};
`;

const StyledP = styled.p`
  text-align: left;
  line-height: 20px;
  font-size: 12px;
  &.title {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
    margin-bottom: 10px;
  }
`;
