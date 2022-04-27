import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProfileTitle from '../elements/ProfileTitle';
import ProfileInput from '../elements/ProfileInput';
import ConfirmModal from '../common/Modal/ConfirmModal';
import ResignModal from '../common/Modal/ResignModal';
import StyledButton from '../../styles/StyledButton';

function Resign({
  password,
  passwordMessage,
  onChange,
  onSubmit,
  modalOn,
  handleModal,
  errModalOn,
  handleErrModal,
  errMsg,
}) {
  return (
    <StyledContentWrap onSubmit={onSubmit}>
      <ProfileTitle className="margin">회원 탈퇴</ProfileTitle>
      <ProfileInput text="비밀번호" name="password" value={password} message={passwordMessage} onChange={onChange} />
      <StyledButton type="submit" className="left">
        회원 탈퇴
      </StyledButton>
      {modalOn && <ResignModal onClose={handleModal} title="회원 탈퇴" />}
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="회원 탈퇴 실패" content={errMsg} />}
    </StyledContentWrap>
  );
}

Resign.propTypes = {
  password: PropTypes.string.isRequired,
  passwordMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  modalOn: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
};

export default Resign;

const StyledContentWrap = styled.form`
  width: 100%;
`;
