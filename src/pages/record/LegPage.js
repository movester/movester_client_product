import React, { useEffect, useState } from 'react';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Leg from '../../components/record/Leg';
import getDate from '../../util/date';

function LegPage() {
  const [records, setRecords] = useState([]);
  const [record, setRecord] = useState(0);
  const [todayRecord, setTodayRecord] = useState(0);
  const [message, setMessage] = useState('');
  const [isCreate, setIsCreate] = useState(false);

  useEffect(async () => {
    try {
      const { data } = await axios.get('records/2');

      const legRecords = data.data;
      setRecords(legRecords.reverse());

      const lastRecord = legRecords[legRecords.length - 1];
      if (lastRecord.date === getDate.today) {
        setIsCreate(true);
        setTodayRecord(lastRecord.record);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isCreate, todayRecord]);

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onCreate = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post('records', {
        type: 2,
        record,
      });

      if (data.success) {
        setIsCreate(prev => !prev);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  const onUpdate = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.patch('records', {
        type: 2,
        record,
      });

      if (data.success) {
        setIsCreate(prev => !prev);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  const onDelete = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.delete('records/2');

      if (data.success) {
        setIsCreate(prev => !prev);
      }
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  const onSliderChange = val => {
    setMessage('');
    setRecord(val);
  };

  const onInputChange = e => {
    setMessage('');
    setRecord(+e.target.value);
  };

  const onSliderClick = e => {
    setMessage('');
    if (e.target.name === 'increase') setRecord(prev => +(prev + 0.1).toFixed(1));
    else setRecord(prev => +(prev - 0.1).toFixed(1));
  };

  useEffect(() => {
    if (record > 40 || record < -15) {
      setMessage(`기록은 40cm보다 크거나 -15cm보다 작을 수 없습니다.`);
      setRecord(0);
    } else if (String(record).includes('.')) {
      if (String(record).substring(String(record).indexOf('.') + 1).length > 1) {
        setMessage('소수점 1자리까지만 입력해 주세요.');
        setRecord(+record);
      }
    }
  }, [record]);

  return (
    <Main type="record">
      <Nav />
      <Leg
        records={records}
        record={record}
        message={message}
        onSliderChange={onSliderChange}
        onInputChange={onInputChange}
        onSliderClick={onSliderClick}
        isCreate={isCreate}
        onCreate={onCreate}
        onUpdate={onUpdate}
        onDelete={onDelete}
        todayRecord={todayRecord}
        errModalOn={errModalOn}
        handleErrModal={handleErrModal}
        errMsg={errMsg}
      />
    </Main>
  );
}

export default LegPage;
