import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../services/defaultClient';
import Main from '../../components/common/Main';
import Loading from '../../components/common/Loading';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import StretchingDetail from '../../components/stretching/StretchingDetail';

function StretchingDetailPage() {
  const { idx } = useParams();
  const [loading, setLoading] = useState(true);
  const [stretching, setStretching] = useState({});

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  useEffect(() => {
    const getStretching = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`/stretchings/${idx}`);
        setStretching(result.data.data);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };
    getStretching();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Main>
      <StretchingDetail stretching={stretching} />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 리스트 응답 실패" content={errMsg} />}
    </Main>
  );
}

export default StretchingDetailPage;
