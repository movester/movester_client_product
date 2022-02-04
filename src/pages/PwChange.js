import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';
import Nav from '../components/common/Nav';
import Button from '../components/elements/Button';
import ProfillTitle from '../components/elements/ProfileTitle';
import ProfillInput from '../components/elements/ProfillInput';
import ReCaptcha from '../components/common/ReCaptcha';
import ModalPortal from '../components/common/Modal/ModalPortal';
import PwConfirm from '../components/common/Modal/PwConfirm';

function PwChange() {
  const [modalOn, setModalOn] = useState(false);
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <Main type="profill">
      <Nav />
      <StyledContentWrap>
        <ProfillTitle title="기본 정보" />
        <ProfillInput text="현재 비밀번호" />
        <ProfillInput text="새 비밀번호" />
        <ProfillInput text="비밀번호 확인" />
        <StyledButtonWrap>
          <ReCaptcha />
          <Button text="비밀번호 변경" event={handleModal} />
          <ModalPortal>{modalOn && <PwConfirm onClose={handleModal} title="비밀번호 변경" />}</ModalPortal>
        </StyledButtonWrap>
      </StyledContentWrap>
    </Main>
  );
}

export default PwChange;

const StyledContentWrap = styled.section`
  width: 100%;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: end;
  @media screen and (max-width: 1024px) {
    flex-flow: column;
    align-items: start;
    .recaptcha {
      margin-bottom: 30px;
    }
  }
`;
