import React, { useState, useEffect } from 'react';
import axios from '../services/defaultClient';
import Index from '../components/index/Index';
import Main from '../components/common/Main';
import ConfirmModal from '../components/common/Modal/ConfirmModal';
import Loading from '../components/common/Loading';

function IndexPage() {
  const [loading, setLoading] = useState(true);
  const [weekStretching, setWeekStretching] = useState([]);

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  useEffect(() => {
    const getWeekStretching = async () => {
      try {
        const res = await axios.get(`/weeks/expose`);
        const result = res.data.data;
        setWeekStretching(() => result);
      } catch (err) {
        setErrMsg('오류 발생');
        handleErrModal();
      }
    };

    getWeekStretching();
    setLoading(false);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Main>
      <Index weekStretching={weekStretching} />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="오류" content={errMsg} />}
    </Main>
  );
}

export default IndexPage;
