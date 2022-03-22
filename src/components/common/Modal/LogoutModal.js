import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fetchLogoutThunk } from '../../../store/auth/authAsyncThunk';
import ModalPortal from './ModalPortal';
import begImage from '../../../assets/beg.png';

function LogoutModal({ onClose }) {
  const isError = useSelector(state => state.auth.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(fetchLogoutThunk());
    if (!isError) {
      navigate('/');
    }
  };
  return (
    <ModalPortal>
      <Container>
        <Content>
          <Title>로그아웃</Title>
          <p>로그아웃하시겠습니까?</p>
          <Image src={begImage} alt="삭제 이미지" />
          <FlexContainer>
            <StyledButton type="button" onClick={onLogout}>
              예
            </StyledButton>
            <StyledButton type="button" onClick={onClose}>
              아니오
            </StyledButton>
          </FlexContainer>
        </Content>
      </Container>
    </ModalPortal>
  );
}

LogoutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LogoutModal;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Content = styled.div`
  background: #ffffff;
  padding: 20px;
  width: 400px;
  height: auto;
  border-radius: 12px;
  text-align: center;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  margin: 20px 0 10px 0;
`;

const FlexContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 30px;
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: ${({ theme }) => theme.lightPurple};
  border-radius: 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  border: none;
`;
