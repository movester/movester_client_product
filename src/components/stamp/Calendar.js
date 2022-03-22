import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import calendarArr from '../../util/calendarArr';

function Calendar({ stampArr, view, setView }) {
  const { dates, firstDateIndex, lastDateIndex, prevDates, TLDate } = calendarArr(view.year, view.month);
  const today = new Date();
  // today.getDate
  const prevClick = () => {
    if (view.year === 2021 && view.month === 0) return;
    setView({
      ...view,
      year: view.month === 0 ? view.year - 1 : view.year,
      month: view.month === 0 ? 11 : view.month - 1,
    });
  };

  const nextClcik = () => {
    if (view.year === today.getFullYear() && view.month === today.getMonth()) return;
    setView({
      ...view,
      year: view.month === 11 ? view.year + 1 : view.year,
      month: view.month === 11 ? 0 : view.month + 1,
    });
  };
  return (
    <CalendarWrapper>
      <div className="header">
        <IoIosArrowBack onClick={prevClick} />
        <span className="title">
          {view.year}. {view.month + 1}
        </span>
        <IoIosArrowForward onClick={nextClcik} />
      </div>

      <div className="calendar">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <li key={index} className="calendar-header">
            {day}
          </li>
        ))}
        {dates.map((el, index) => (
          <li
            key={index}
            className={`${stampArr[el - 1] === 1 && index < prevDates.length + TLDate ? 'acitve' : ''} ${
              view.year === today.getFullYear() &&
              view.month === today.getMonth() &&
              firstDateIndex <= index &&
              lastDateIndex >= index &&
              today.getDate() === el
                ? 'today'
                : ''
            }`}
          >
            <span className={index >= firstDateIndex && index < lastDateIndex + 1 ? 'this' : 'other'}>{el}</span>
          </li>
        ))}
      </div>
    </CalendarWrapper>
  );
}

Calendar.propTypes = {
  stampArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  view: PropTypes.objectOf(PropTypes.number).isRequired,
  setView: PropTypes.func.isRequired,
};

export default Calendar;

const CalendarWrapper = styled.div`
  flex: 0.8;
  .calendar {
    display: grid;
    row-gap: 10px;
    margin-top: 30px;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    @media screen and (max-width: 800px) {
      width: 100%;
    }
  }
  svg {
    cursor: pointer;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
    width: 60px;
    height: 60px;
    &.calendar-header {
      font-weight: bold;
    }
    &.acitve {
      background-image: url('/assets/stamp.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.today {
      color: #ffffff;
      font-weight: bold;
      border-radius: 50%;
      background-color: #948fbf;
    }
  }
  span {
    &.other {
      color: #c0c0c0;
    }
  }

  .header {
    display: flex;
    justify-content: space-between;
    font-size: 1.6rem;
    font-weight: bold;
    padding: 0 25px;
  }
`;
