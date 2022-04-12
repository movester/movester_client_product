import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from '../../services/defaultClient';
import Main from '../../components/common/Main';
import Loading from '../../components/common/Loading';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import StretchingDetail from '../../components/stretching/StretchingDetail';
import StretchingRecommend from '../../components/stretching/StretchingRecommend';

function StretchingDetailPage() {
  const { idx } = useParams();
  const isAuth = useSelector(state => state.auth.isAuth);
  const userIdx = useSelector(state => state.auth?.user?.userIdx) || '';
  const [loading, setLoading] = useState(true);
  const [stretching, setStretching] = useState({});
  const [recommendStretchings, setRecommendStretchings] = useState([]);
  const [userDifficulty, setUserDifficulty] = useState(0);
  const [userDifficultyFlag, setUserDifficultyFlag] = useState(false);
  const [isStretchingActive, setIsStretchingActive] = useState(false);

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const handleLike = async (idx, active) => {
    try {
      if (active) {
        await axios.delete(`likes/${idx}`);
      } else {
        await axios.post('likes/', {
          stretchingIdx: idx,
        });
      }
      setIsStretchingActive(prev => !prev);
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const getStretching = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`/stretchings/${idx}?userIdx=${userIdx}`);
        setStretching(result.data.data);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };
    getStretching();
  }, [userDifficulty, isStretchingActive]);

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
    if (isAuth) {
      getUserDifficulty();
    }
  }, [userDifficultyFlag]);

  useEffect(() => {
    const getRecommendStretchings = async () => {
      try {
        setLoading(true);
        const result = await axios.get(`/stretchings/recommend/${idx}?userIdx=${userIdx}`);
        setRecommendStretchings(result.data.data);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };
    getRecommendStretchings();
  }, [isStretchingActive]);

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
        handleLike={handleLike}
      />
      <StretchingRecommend recommendStretchings={recommendStretchings} handleRecommendLike={handleLike} />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="다시 시도해주세요" content={errMsg} />}
    </Main>
  );
}

export default StretchingDetailPage;
