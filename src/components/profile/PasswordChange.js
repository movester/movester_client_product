import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProfileTitle from '../elements/ProfileTitle';
import ProfileInput from '../elements/ProfileInput';
import StyledButton from '../../styles/StyledButton';
import ModalPortal from '../common/Modal/ModalPortal';
import LinkModal from '../common/Modal/LinkModal';
import ConfirmModal from '../common/Modal/ConfirmModal';

function PasswordChange({
  curPassword,
  newPassword,
  confirmPassword,
  onChange,
  onSubmit,
  modalOn,
  handleModal,
  errModalOn,
  handleErrModal,
  errMsg,
}) {
  return (
    <>
      <StyledContentWrap onSubmit={onSubmit}>
        <ProfileTitle title="기본 정보" />
        <ProfileInput text="현재 비밀번호" name="curPassword" value={curPassword} onChange={onChange} />
        <ProfileInput text="새 비밀번호" name="newPassword" value={newPassword} onChange={onChange} />
        <ProfileInput text="비밀번호 확인" name="confirmPassword" value={confirmPassword} onChange={onChange} />
        <StyledButton className="right" type="submit">
          비밀번호 변경
        </StyledButton>
      </StyledContentWrap>
      {modalOn && (
        <ModalPortal>
          <LinkModal
            onClose={handleModal}
            title="비밀번호 변경"
            content="비밀번호 변경이 완료되었습니다!"
            link="/mypage/profile"
          />
        </ModalPortal>
      )}
      {errModalOn && (
        <ModalPortal>
          <ConfirmModal onClose={handleErrModal} title="비밀번호 변경 실패!" content={errMsg} />
        </ModalPortal>
      )}
    </>
  );
}

PasswordChange.propTypes = {
  curPassword: PropTypes.string.isRequired,
  newPassword: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  modalOn: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
};

export default PasswordChange;

const StyledContentWrap = styled.form`
  width: 100%;
`;