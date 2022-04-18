import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Button({ text, type, event }) {
  return (
    <StyledButton className={type} onClick={event}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  event: PropTypes.func,
};

Button.defaultProps = {
  text: '제출하기',
  type: 'btn',
  event: () => {},
};

export default Button;

const StyledButton = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 40px;
  line-height: 40px;
  display: inline-block;
  background-color: ${({ theme }) => theme.lightPurple};
  border-radius: 20px;
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &.search {
    width: 90px;
    height: 30px;
    line-height: 26px;
    background-color: #ffffff;
    font-size: 18px;
    color: ${({ theme }) => theme.darkPurple};
    border: 2px solid ${({ theme }) => theme.darkPurple};
    margin: 0;
  }

  &.stretching {
    float: left;
    width: 200px;
    height: 40px;
    line-height: 40px;
    background-color: ${({ theme }) => theme.darkGray};
    font-size: 18px;
    color: #000000;
    margin: 0;
  }

  & + & {
    margin-left: 10%;
  }
`;
