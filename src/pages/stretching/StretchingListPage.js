import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../services/defaultClient';
import Main from '../../components/common/Main';
import Loading from '../../components/common/Loading';
import StretchingList from '../../components/stretching/StretchingList';
import StretchingTagModal from '../../components/common/Modal/StretchingTagModal';
import ConfirmModal from '../../components/common/Modal/ConfirmModal';

function StretchingListPage() {
  const userIdx = useSelector(state => state.auth.user?.userIdx) || '';
  const [loading, setLoading] = useState(true);
  const [stretchings, setStretchings] = useState([]);
  const [isStretchingActive, setIsStretchingActive] = useState(false);
  const [searchType, setSearchType] = useState(1);
  const [main, setMain] = useState('');
  const [sub, setSub] = useState('');
  const handleSearchType = type => {
    setSearchType(() => type);
  };
  const handleMain = type => {
    setMain(() => type);
  };
  const handleSub = type => {
    setSub(() => type);
  };
  const [tagModalOn, setTagModalOn] = useState(false);
  const handleTagModal = () => {
    setTagModalOn(!tagModalOn);
  };

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
    const getStretchingList = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/stretchings?searchType=${searchType}&main=${main}&sub=${sub}&userIdx=${userIdx}`);
        const result = res.data.data;
        setStretchings(result);
      } catch (err) {
        setErrMsg(err.response.data.error);
        handleErrModal();
      }
      setLoading(false);
    };

    getStretchingList();
  }, [isStretchingActive, main, sub]);
  return loading ? (
    <Loading />
  ) : (
    <Main>
      <StretchingList
        stretchings={stretchings}
        handleLike={handleLike}
        searchType={searchType}
        handleSearchType={handleSearchType}
        main={main}
        handleMain={handleMain}
        sub={sub}
        handleSub={handleSub}
      />
      {tagModalOn && <StretchingTagModal onClose={handleTagModal} title="계정 삭제" />}
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="스트레칭 리스트 응답 실패" content={errMsg} />}
    </Main>
  );
}

export default StretchingListPage;
