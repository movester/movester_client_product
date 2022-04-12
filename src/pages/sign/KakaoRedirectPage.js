import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/common/Loading';
import { fetchKakaoLoginThunk } from '../../store/auth/authAsyncThunk';

function KakaoRedirectPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isError = useSelector(state => state.auth.error);

  const code = new URL(window.location.href).searchParams.get('code');

  useEffect(async () => {
    await dispatch(fetchKakaoLoginThunk(code));
    if (!isError) {
      navigate('/');
    }
  }, []);

  return <Loading />;
}

export default KakaoRedirectPage;
