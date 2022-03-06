import React, { useState } from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';
import Nav from '../components/common/Nav';
import Button from '../components/elements/Button';
import ProfillTitle from '../components/elements/ProfileTitle';
import ProfillInput from '../components/elements/ProfillInput';
import ModalPortal from '../components/common/Modal/ModalPortal';
import AccountLeave from '../components/common/Modal/AccountLeave';

function Account() {
  const [modalOn, setModalOn] = useState(false);
  const [input, setInput] = useState('');
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  const onChange = e => {
    setInput(e.target.value);
  };
  return (
    <Main type="profill">
      <Nav />
      <StyledContentWrap>
        <ProfillTitle title="회원 탈퇴" />
        <ProfillInput text="비밀번호" />
        <input type="text" value={input} onChange={onChange} />
        <StyledButtonWrap>
          <Button text="회원 탈퇴" event={handleModal} />
          <ModalPortal>
            {modalOn && <AccountLeave onClose={handleModal} title="회원 탈퇴" password={input} />}
          </ModalPortal>
        </StyledButtonWrap>
      </StyledContentWrap>
    </Main>
  );
}

export default Account;

const StyledContentWrap = styled.section`
  width: 100%;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;

  align-items: end;
  @media screen and (max-width: 1024px) {
    flex-flow: column;
    align-items: start;
    .recaptcha {
      margin-bottom: 30px;
    }
  }
`;
