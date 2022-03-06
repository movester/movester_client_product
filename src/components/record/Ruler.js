import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';

function Ruler({ record, message, setRecord, setMessage }) {
  const onSliderChange = val => {
    setMessage('');
    setRecord(val);
  };

  const onInputChange = e => {
    setMessage('');
    setRecord(+e.target.value);
  };

  const onClick = e => {
    setMessage('');
    if (e.target.name === 'increase') setRecord(prev => +(prev + 0.1).toFixed(1));
    else setRecord(prev => +(prev - 0.1).toFixed(1));
  };

  useEffect(() => {
    if (record > 30 || record < -30) {
      setMessage(`기록은 30cm보다 크거나 -30cm보다 작을 수 없습니다.`);
      setRecord(0);
    } else if (String(record).includes('.')) {
      if (String(record).substring(String(record).indexOf('.') + 1).length > 1) {
        setMessage('소수점 1자리까지만 입력해 주세요.');
        setRecord(+record);
      }
    }
  }, [record]);

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
          height: 28,
          width: 28,
          marginLeft: -14,
          marginTop: -14,
          backgroundColor: '#2a1598',
          border: 0,
        }}
        trackStyle={{
          background: 'none',
        }}
      />
      <RecordButton name="decrease" onClick={onClick}>
        -
      </RecordButton>
      <RecordInput type="number" step={0.1} value={record} onChange={e => onInputChange(e)} />
      <RecordButton name="increase" onClick={onClick}>
        +
      </RecordButton>
      {message && <MessageDisplayer>{message}</MessageDisplayer>}
    </SliderContainer>
  );
}

Ruler.propTypes = {
  record: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  setRecord: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
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
  margin: 20px;
`;

const RecordInput = styled.input`
  margin: 20px 5px;
  -webkit-appearance: none;
`;

const RecordButton = styled.button`
  width: 20px;
  height: 20px;
  color: #fff;
  background: ${({ theme }) => theme.lightPurple};
  border-radius: 50%;
`;

const MessageDisplayer = styled.p`
  color: red;
  font-size: 0.8rem;
`;
