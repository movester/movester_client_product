import React, { useState, useEffect } from 'react';
import axios from '../services/defaultClient';
import Index from '../components/index/Index';
import Main from '../components/common/Main';
import ConfirmModal from '../components/common/Modal/ConfirmModal';
import Loading from '../components/common/Loading';

function IndexPage() {
  const [loading, setLoading] = useState(true);
  const [weekStretchings, setWeekStretching] = useState([]);

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  useEffect(() => {
    const getWeekStretching = async () => {
      try {
        const result = await axios.get(`/weeks/expose`);

        setWeekStretching([...result.data.data]);
      } catch (err) {
        setErrMsg(err.response.data.error);
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
      <Index weekStretchings={weekStretchings} />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="오류" content={errMsg} />}
    </Main>
  );
}

export default IndexPage;
