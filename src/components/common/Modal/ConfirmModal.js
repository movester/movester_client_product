import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import flexCenterAlign from '../../../styles/flexCenterAlign';

function ConfirmModal({ title, content, onClose }) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <p>{content}</p>
        <StyledButton type="button" onClick={onClose}>
          닫기
        </StyledButton>
      </Content>
    </Container>
  );
}

export default ConfirmModal;

ConfirmModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

ConfirmModal.defaultProps = {
  title: '',
  content: '',
};

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
`;

const Content = styled.div`
  background: #ffffff;
  padding: 20px;
  width: 400px;
  border-radius: 12px;
  ${flexCenterAlign}

  .info {
    font-size: 12px;
    color: #888383;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
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
  margin-top: 20px;
`;
