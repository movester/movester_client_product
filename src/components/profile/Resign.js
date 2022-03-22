import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../elements/Button';
import ProfileTitle from '../elements/ProfileTitle';
import ProfileInput from '../elements/ProfileInput';
import ModalPortal from '../common/Modal/ModalPortal';
import AccountLeave from '../common/Modal/AccountLeave';

function Resign({ setPage }) {
  const [modalOn, setModalOn] = useState(false);
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  const prevPage = () => {
    setPage(1);
    console.log(setModalOn,handleModal)
  };
  return (
    <StyledContentWrap>
      <ProfileTitle title="회원 탈퇴" />
      <StyledFlexWrap>
        <ProfileInput text="비밀번호" />
        <StyledButtonWrap>
          <Button text="이전으로 돌아가기" event={prevPage} />
          <Button text="회원 탈퇴" event={handleModal} />
          <ModalPortal>{modalOn && <AccountLeave onClose={handleModal} title="회원 탈퇴" />}</ModalPortal>
        </StyledButtonWrap>
      </StyledFlexWrap>
    </StyledContentWrap>
  );
}

Resign.propTypes = {
  setPage: PropTypes.func,
};

Resign.defaultProps = {
  setPage: () => {},
};

export default Resign;

const StyledContentWrap = styled.section`
  width: 100%;
`;

const StyledButtonWrap = styled.div`
  display: flex;
  width: 60%;
  max-width: 600px;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: start;
    div + div {
      margin-left: 0;
      margin-top: 30px;
    }
    .btn {
      margin-left: 0;
    }
  }
`;

const StyledFlexWrap = styled.div`
  display: flex;
  flex-direction: column;
`;