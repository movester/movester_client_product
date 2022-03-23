import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProfileTitle from '../elements/ProfileTitle';
import ProfileInput from '../elements/ProfileInput';
import ModalPortal from '../common/Modal/ModalPortal';
import ConfirmModal from '../common/Modal/ConfirmModal';
import ResignModal from '../common/Modal/ResignModal';
import StyledButton from '../../styles/StyledButton';

function Resign({ password, onChange, onSubmit, modalOn, handleModal, errModalOn, handleErrModal, errMsg }) {
  return (
    <StyledContentWrap onSubmit={onSubmit}>
      <ProfileTitle title="회원 탈퇴" />
      <ProfileInput text="비밀번호" name="password" value={password} onChange={onChange} />
      <StyledButton type="submit" className="right">
        회원 탈퇴
      </StyledButton>
      {modalOn && (
        <ModalPortal>
          <ResignModal
            onClose={handleModal}
            title="회원 탈퇴"
          />
        </ModalPortal>
      )}
      {errModalOn && (
        <ModalPortal>
          <ConfirmModal onClose={handleErrModal} title="회원 탈퇴 실패!" content={errMsg} />
        </ModalPortal>
      )}
    </StyledContentWrap>
  );
}

Resign.propTypes = {
  password: PropTypes.string.isRequired,
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
