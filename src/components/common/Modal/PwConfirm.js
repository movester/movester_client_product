import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
import begImage from '../../../assets/pwChange.png';

function PwConfirm({ title, onClose }) {
  return (
    <ModalPortal>
      <Container>
        <Content>
          <button type="button" onClick={onClose}>
            x
          </button>
          <Title>{title}</Title>
          <p>비밀번호 변경이 완료되었습니다.</p>
          <Image src={begImage} alt="비밀번호 변경 이미지" />
        </Content>
      </Container>
    </ModalPortal>
  );
}

PwConfirm.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
};

PwConfirm.defaultProps = {
  title: '',
  onClose: () => {},
};

export default PwConfirm;

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
  position: relative;
  background: #ffffff;
  padding: 20px;
  width: 400px;
  height: auto;
  border-radius: 12px;
  text-align: center;
  button {
    position: absolute;
    top: 11px;
    right: 27px;
    font-size: 29px;
  }
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
