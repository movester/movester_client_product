import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import flexCenterAlign from '../../../styles/flexCenterAlign';
import begImage from '../../../assets/beg.png';
import MoveLink from '../MoveLink';

function FindPasswordModal({ closeModal }) {
  return (
    <Container>
      <Content>
        <Title>비밀번호 찾기</Title>
        <button type="button" onClick={closeModal}>
          x
        </button>
        <p className="info">해당 이메일로 가입된 계정이 존재하지 않습니다.</p>
        <Image src={begImage} alt="삭제 이미지" />
        <MoveLink className="link" text="아직 계정이 없으신가요?" address="/join" btnText="계정 만들기" />
      </Content>
    </Container>
  );
}

FindPasswordModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default FindPasswordModal;

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
  position: relative;

  button {
    position: absolute;
    top: 10px;
    right: 10px;
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
