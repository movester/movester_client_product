import React, { useState, useEffect } from 'react';
import axios from '../../services/defaultClient';
import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Like from '../../components/like/Like';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';
import Loading from '../../components/common/Loading';

function LikePage() {
  const [loading, setLoading] = useState(true);
  const [likeStretchings, setLikeStretchings] = useState([]);
  const [isStretchingActive, setIsStretchingActive] = useState(false);

  const [errModalOn, setErrModalOn] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const handleErrModal = () => {
    setErrModalOn(!errModalOn);
  };

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const handleLike = async idx => {
    try {
      await axios.delete(`likes/${idx}`);

      setIsStretchingActive(prev => !prev);
    } catch (err) {
      setErrModalOn(prev => !prev);
      setErrMsg(err.response.data.error);
    }
  };

  useEffect(() => {
    const getLikeStretchingList = async () => {
      try {
        const result = await axios.get(`/likes`);

        setLikeStretchings([...result.data.data]);
        setTotal([...result.data.data].length);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
    };

    getLikeStretchingList();
    setLoading(false);
  }, [isStretchingActive, page, total]);

  return loading ? (
    <Loading />
  ) : (
    <Main type="profile">
      <Nav />
      <Like likeStretchings={likeStretchings} handleLike={handleLike} total={total} page={page} setPage={setPage} />
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="찜한 스트레칭 리스트 응답 실패" content={errMsg} />}
    </Main>
  );
}

export default LikePage;
