import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/utils/Main';
import Nav from '../components/utils/Nav';
import Button from '../components/utils/Button';
import ProfillTitle from '../components/elements/ProfileTitle';
import ProfillInput from '../components/utils/ProfillInput';
import ReCaptcha from '../components/utils/ReCaptcha';
import ModalPortal from '../components/utils/Modal/ModalPortal';
import PwChangeModal from '../components/utils/Modal/PwChangeModal';

function pwChange() {
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
          <ModalPortal>{modalOn && <PwChangeModal onClose={handleModal} title="계정 삭제" />}</ModalPortal>
        </StyledButtonWrap>
      </StyledContentWrap>
    </Main>
  );
}

export default pwChange;

const StyledContentWrap = styled.section`
  width: 100%;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: end;
`;
