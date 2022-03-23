import React, { useEffect, useState } from 'react';
import axios from '../../services/defaultClient';

import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Sholuder from '../../components/record/Sholuder';

function ShoulderPage() {
  const [records, setRecords] = useState([]);
  const [record, setRecord] = useState(0);
  const [todayRecord, setTodayRecord] = useState(0);
  const [message, setMessage] = useState('');
  const [isCreate, setIsCreate] = useState(false);

  useEffect(async () => {
    try {
      const { data } = await axios.get('records/1');

      const sholuderRecords = data.data;
      setRecords(sholuderRecords.reverse());

      const lastRecord = sholuderRecords[sholuderRecords.length - 1];
      const today = new Date().toISOString().split('T')[0];
      if (lastRecord.date === today) {
        setIsCreate(true);
        setTodayRecord(lastRecord.record);
      }
    } catch (err) {
      console.log(err);
    }
  }, [isCreate]);

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const onCreate = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post('records', {
        type: 1,
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
        type: 1,
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
      const { data } = await axios.delete('records/1');

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
    <Main type="record">
      <Nav />
      <Sholuder
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

export default ShoulderPage;
