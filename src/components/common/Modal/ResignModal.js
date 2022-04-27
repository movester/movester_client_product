import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { fetchResignThunk } from '../../../store/auth/authAsyncThunk';
import ModalPortal from './ModalPortal';

function ResignModal({ title, onClose }) {
  const isError = useSelector(state => state.auth.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onResign = () => {
    dispatch(fetchResignThunk());
    if (!isError) {
      navigate('/resign');
    }
  };

  return (
    <ModalPortal>
      <Container>
        <Content>
          <Title>{title}</Title>
          <p>{title} 시, 기존의 데이터가 삭제됩니다.</p>
          <p>정말로 삭제하시겠습니까?</p>
          <Image src="/assets/beg.png" alt="삭제 이미지" />
          <FlexContainer>
            <StyledButton type="button" onClick={onResign}>
              응, 끝이야
            </StyledButton>
            <StyledButton type="button" onClick={onClose}>
              아니야! 실수였어
            </StyledButton>
          </FlexContainer>
        </Content>
      </Container>
    </ModalPortal>
  );
}

ResignModal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ResignModal;

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
  z-index: 1000;
`;

const Content = styled.div`
  position: relative;
  background: #ffffff;
  padding: 20px;
  width: 400px;
  height: auto;
  border-radius: 12px;
  text-align: center;
  p {
    margin: 8px 0;
  }

  span {
    font-weight: bold;
    color: #2a1598;
  }
`;

const Title = styled.div`
  font-size: 18px;
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
