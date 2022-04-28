import React, { useState } from 'react';
import styled from 'styled-components';
import useAsync from '../../hook/useAsync';
import axios from '../../services/defaultClient';
import Loading from '../common/Loading';
import Error from '../common/Error';

import Main from '../common/Main';
import Nav from '../common/Nav';
import Calendar from './Calendar';
import Submit from './Submit';

function Stamp() {
  const today = new Date();
  const [redirect, setRedirect] = useState(false);
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const getStamp = async () => {
    const res = await axios.get(`/attend-points?year=${view.year}&month=${view.month + 1}`);
    return res.data.data;
  };

  const [state] = useAsync(getStamp, [view, redirect]);
  const { loading, data: stamp, error } = state;
  return (
    <Main type="record">
      <Nav />
      <StyledWrap>
        <div className="flex-wrap">
          {loading && <Loading />}
          {error && <Error />}
          {stamp && (
            <>
              <Calendar stampArr={stamp} view={view} setView={setView} />{' '}
              <Submit redirect={redirect} setRedirect={setRedirect} />
            </>
          )}
        </div>
      </StyledWrap>
    </Main>
  );
}

export default Stamp;

const StyledWrap = styled.section`
  width: 100%;
  margin-bottom: 50px;
  text-align: left;

  .flex-wrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 60px;

    @media screen and (max-width: 1024px) {
      margin-top: 20px;
      display: block;
    }
    @media screen and (max-width: 600px) {
      display: block;
    }
    .loading,
    .error {
      && {
        justify-content: center;
      }
    }
  }
  .ft-first {
    font-size: 1.5rem;
  }
`;
