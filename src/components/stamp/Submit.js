import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import useAsync from '../../hook/useAsync';
import axios from '../../services/defaultClient';
import Loading from '../Loading';
import Error from '../Error';

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
      {monthData && (
        <p>
          이달의 {name}님의 출석 포인트는 {monthData.filter(el => el === 1).length * 10}점 입니다.
        </p>
      )}
      {monthData && monthData[today.getDate() - 1] === 0 ? (
        <>
          <p className="stamp-title">오늘의 출석 도장 찍기</p>
          <StyledButton onClick={onClick} type="button">
            제출하기
          </StyledButton>
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
  margin-right: 10%;
  min-width: 300px;
  @media screen and (max-width: 1024px) {
    margin-right: 0;
    margin-top: 30px;
  }
  p {
    margin-bottom: 20px;
  }
  .stamp-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: ${({ theme }) => theme.darkPurple};
  }
`;

const StyledButton = styled.button`
  width: 100%;
  max-width: 500px;
  height: 40px;
  margin-top: 20px;
  font-weight: bold;
  border-radius: 10px;
  color: #fff;
  background-color: ${({ theme }) => theme.lightPurple};
`;
