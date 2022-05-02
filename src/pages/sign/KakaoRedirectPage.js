import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import { fetchKakaoLoginThunk } from '../../store/auth/authAsyncThunk';
import LinkModal from '../../components/common/Modal/LinkModal';

function KakaoRedirectPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isError = useSelector(state => state.auth.error);
  const [errModalOn, setErrModalOn] = useState(false);

  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(async () => {
    await dispatch(fetchKakaoLoginThunk(code));
    if (!isError) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (isError) {
      setErrModalOn(() => true);
    }
  }, [isError]);

  return (
    <>
      <Loading />
      {errModalOn && (
        <LinkModal
          onClose={() => setErrModalOn(prev => !prev)}
          title="카카오 로그인 실패"
          content="이미 뭅스터 계정으로 가입된 계정입니다."
          link="/login"
        />
      )}
    </>
  );
}

export default KakaoRedirectPage;
