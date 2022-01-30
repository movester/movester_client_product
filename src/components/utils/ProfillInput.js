import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfillInput({ text }) {
  return (
    <StyledInputWrap>
      <p>{text}</p>
      <input />
    </StyledInputWrap>
  );
}

ProfillInput.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ProfillInput;

const StyledInputWrap = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  p {
    width: 25%;
    color: #615b5b;
    font-weight: bold;
    font-size: 18px;
  }
  input {
    width: 100%;
    max-width: 380px;
    height: 40px;
    border-radius: 10px;
    background-color: rgba(196, 196, 196, 0.3);
    border: none;
    padding: 0 10px;
  }
`;
