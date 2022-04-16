import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

function Ruler({ record, message, onSliderChange,}) {
  return (
    <SliderContainer>
      <RecordDisplayer>{record}cm</RecordDisplayer>
      <Margin />
      <Slider
        min={-30}
        max={30}
        value={record}
        step={0.1}
        onChange={onSliderChange}
        railStyle={{
          height: 2,
        }}
        handleStyle={{
          height: 15,
          width: 15,
          marginLeft: -5,
          marginTop: -6,
          backgroundColor: '#2a1598',
          border: 0,
        }}
        trackStyle={{
          background: 'none',
        }}
      />

      {message && <MessageDisplayer>{message}</MessageDisplayer>}
    </SliderContainer>
  );
}

Ruler.propTypes = {
  record: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onSliderChange: PropTypes.func.isRequired,
};

export default Ruler;

const SliderContainer = styled.div`
  margin: 20px;
`;

const RecordDisplayer = styled.span`
  color: #2a1598;
  font-weight: bold;
`;

const Margin = styled.div`
  margin: 40px;
`;

const MessageDisplayer = styled.p`
  color: red;
  font-size: 0.8rem;
`;
