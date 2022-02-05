import React, { useState } from 'react';
import styled from 'styled-components';
import flexCenterAlign from '../../../styles/flexCenterAlign';
import FormWrapper from '../../../styles/FormWrapper';
import StyledButton from '../../../styles/StyledButton';
import StyledInput from '../../../styles/StyledInput';
import FindPasswordModal from '../../common/Modal/FindPasswordModal';
import ModalPortal from '../../common/Modal/ModalPortal';
import MoveLink from '../../common/MoveLink';

function FindPassword() {
  const [modalOn, setModalOn] = useState(false);
  const [isMailing, setIsMailing] = useState(false);
  console.log(modalOn, typeof setModalOn);

  const handleModal = () => {
    setModalOn(prev => !prev);
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('비밀번호 찾기 onSubmit');

    setIsMailing(prev => !prev);
    // handleModal(); // 이메일 정보가 없을때 실행
  };

  return (
    <>
      <FindPasswordWrapper>
        <h2>비밀번호 찾기</h2>
        {isMailing ? (
          <>
            <img src="/assets/charactor__pw.png" alt="비밀번호 찾기 캐릭터" />
            <span style={{ fontSize: '18px', fontWeight: '700', marginTop: '30px' }}>jnhro1@gmail.com</span>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px 0' }}>
              <p style={{ fontSize: '18px', margin: '10px 0' }}>비밀번호 재설정 메일 전송 완료!</p>
              <p style={{ fontSize: '14px', marginBottom: '30px' }}>메일을 통해 비밀번호를 재설정해주세요.</p>
            </div>
            <p style={{ fontSize: '14px', color: '#888383', marginBottom: '30px' }}>
              혹시 메일을 받지 못하셨다면 스팸 메일함을 확인해주세요.
            </p>
            <MoveLink text="이미 계정이 있으신가요?" address="/login" btnText="로그인" />
          </>
        ) : (
          <>
            <p className="wrapper__todo">가입하신 이메일을 작성해주세요.</p>
            <FormWrapper onSubmit={onSubmit}>
              <StyledInput type="email" name="email" placeholder="이메일" autoComplete="email" />
              <p className="wrapper__info">해당 이메일로 비밀번호 재설정 메일을 받으시겠습니까?</p>
              <StyledButton>비밀번호 재설정하기</StyledButton>
            </FormWrapper>
            <MoveLink text="아직 계정이 없으신가요?" address="/join" btnText="계정 만들기" />
            <MoveLink text="이미 계정이 있으신가요?" address="/login" btnText="로그인" />
          </>
        )}
      </FindPasswordWrapper>
      {modalOn && (
        <ModalPortal>
          <FindPasswordModal closeModal={handleModal} />
        </ModalPortal>
      )}
    </>
  );
}

export default FindPassword;

const FindPasswordWrapper = styled.section`
  ${flexCenterAlign}

  h2 {
    font-size: 36px;
  }

  .wrapper__todo {
    position: relative;
    left: -95px;
    font-size: 14px;
    margin: 20px 0;
  }

  .wrapper__info {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;
