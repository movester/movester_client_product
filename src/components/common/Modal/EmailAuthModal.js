import React from 'react';
import styled from 'styled-components';
import flexCenterAlign from '../../../styles/flexCenterAlign';

function EmailAuthModal() {
  return (
    <Container>
      <Content>
        <Title>이메일 인증 메일 발송!</Title>
        <p>입력하신 이메일 계정으로 인증 메일을 발송하였습니다.</p>
        <p>인증을 통해 가입을 완료해 주세요.</p>
        <img src="/assets/modal-charactor.png" alt="뭅스터 캐릭터" />
        <p className="info">혹시 메일을 받지 못하셨다면 스팸 메일함을 확인해주세요.</p>
      </Content>
    </Container>
  );
}

export default EmailAuthModal;

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
