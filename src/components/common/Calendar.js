import React, { useState } from 'react';
import styled from 'styled-components';

function Calendar() {
  const today = new Date();
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const prevLast = new Date(view.year, view.month, 0);
  const thisLast = new Date(view.year, view.month + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i += 1) {
      prevDates.unshift(PLDate - i);
    }
  }

  // nextDates 계산
  for (let i = 1; i < 7 - TLDay; i += 1) {
    nextDates.push(i);
  }
  // Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);

  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  const userMonth = [1, 1, 1, 0, 0, 0];

  const prevClick = () => {
    setView({
      ...view,
      year: view.month === 0 ? view.year - 1 : view.year,
      month: view.month === 0 ? 11 : view.month - 1,
    });
  };

  const nextClcik = () => {
    setView({
      ...view,
      year: view.month === 11 ? view.year + 1 : view.year,
      month: view.month === 11 ? 0 : view.month + 1,
    });
  };
  return (
    <>
      <div className="header">
        <button type="button" onClick={prevClick}>
          {'<'}
        </button>
        <span className="title">
          {view.year}. {view.month + 1}
        </span>
        <button type="button" onClick={nextClcik}>
          {'>'}
        </button>
      </div>

      <CalendarWrapper>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <li key={index} className="calendar-header">
            {day}
          </li>
        ))}
        {dates.map((el, index) => (
          <li key={index} className={userMonth[el - 1] === 1 && index < prevDates.length + TLDate ? 'acitve' : null}>
            <span className={index >= firstDateIndex && index < lastDateIndex + 1 ? 'this' : 'other'}>{el}</span>
          </li>
        ))}
      </CalendarWrapper>
    </>
  );
}

export default Calendar;

const CalendarWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;

  li {
    align-self: center;
    height: 50px;
    line-height: 50px;
    &.calendar-header {
      font-weight: bold;
    }
    &.acitve {
      color: red;
    }
  }
  span {
    &.other {
      color: #c0c0c0;
    }
  }
`;
