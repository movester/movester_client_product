import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/utils/Main';
import Nav from '../components/utils/Nav';
import Button from '../components/elements/Button';
import ProfillTitle from '../components/elements/ProfileTitle';
import ProfillInput from '../components/elements/ProfillInput';
import ReCaptcha from '../components/utils/ReCaptcha';
import ModalPortal from '../components/utils/Modal/ModalPortal';
import PwChangeModal from '../components/utils/Modal/PwChangeModal';

function UserDelete() {
  const [modalOn, setModalOn] = useState(false);
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <Main type="profill">
      <Nav />
      <StyledContentWrap>
        <ProfillTitle title="회원 탈퇴" />
        <ProfillInput text="비밀번호" />
        <StyledButtonWrap>
          <ReCaptcha />
          <Button text="회원 탈퇴" event={handleModal} />
          <ModalPortal>{modalOn && <PwChangeModal onClose={handleModal} title="계정 삭제" />}</ModalPortal>
        </StyledButtonWrap>
      </StyledContentWrap>
    </Main>
  );
}

export default UserDelete;

const StyledContentWrap = styled.section`
  width: 100%;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
