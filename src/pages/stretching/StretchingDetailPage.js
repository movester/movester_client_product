import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from '../../services/defaultClient';
import Main from '../../components/common/Main';
import Loading from '../../components/common/Loading';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import StretchingDetail from '../../components/stretching/StretchingDetail';

function StretchingDetailPage() {
  const { idx } = useParams();
  const isAuth = useSelector(state => state.auth.isAuth);
  const [loading, setLoading] = useState(true);
  const [stretching, setStretching] = useState({});
  const [recommendStretchings, setRecommendStretchings] = useState([]);
  const [userDifficulty, setUserDifficulty] = useState(0);
  const [userDifficultyFlag, setUserDifficultyFlag] = useState(false);

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
  }, [userDifficulty]);

  useEffect(() => {
    const getUserDifficulty = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`/stretchings/difficulty/${idx}`);
        setUserDifficulty(() => result.data.data?.difficulty);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };
    getUserDifficulty();
  }, [userDifficultyFlag]);

  useEffect(() => {
    const getRecommendStretchings = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`/stretchings/recommend/${idx}`);
        setRecommendStretchings(result.data.data);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };
    getRecommendStretchings();
  }, []);

  const handleDifficulty = async score => {
    const createDifficulty = async () => {
      await axios.post('stretchings/difficulty', {
        stretchingIdx: idx,
        difficulty: score,
      });
    };
    const updateDifficulty = async () => {
      await axios.patch('stretchings/difficulty', {
        stretchingIdx: idx,
        difficulty: score,
      });
    };
    const deleteDifficulty = async () => {
      await axios.delete(`stretchings/difficulty/${idx}`);
    };
    try {
      if (!userDifficulty) {
        createDifficulty();
      } else if (userDifficulty !== score) {
        updateDifficulty();
      } else if (userDifficulty === score) {
        deleteDifficulty();
      }
      setUserDifficultyFlag(prev => !prev);
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <Main>
      <StretchingDetail
        stretching={stretching}
        recommendStretchings={recommendStretchings}
        isAuth={isAuth}
        handleDifficulty={handleDifficulty}
        userDifficulty={userDifficulty}
      />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="다시 시도해주세요" content={errMsg} />}
    </Main>
  );
}

export default StretchingDetailPage;