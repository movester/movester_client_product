import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledButton from '../../styles/StyledButton';
import StyledInput from '../../styles/StyledInput';
import ModalPortal from '../common/Modal/ModalPortal';
import ConfirmModal from '../common/Modal/ConfirmModal';

function EmailAuth({ email, authNum, onChange, onSubmit, errModalOn, handleErrModal, errMsg }) {
  return (
    <>
      <StyledP className="bold margin">{email}</StyledP>
      <StyledP>비밀번호 재설정을 위한 계정 인증 메인 전송 완료!</StyledP>
      <StyledP className="margin">전송된 인증번호를 입력해주세요.</StyledP>
      <StyledInput type="text" name="authNum" value={authNum} placeholder="인증번호" onChange={onChange} />
      <StyledButton onClick={onSubmit}>이메일 인증하기</StyledButton>
      <StyledP className="info">혹시 메일을 받지 못하셨다면 스팸 메일함을 확인해주세요.</StyledP>
      <ModalPortal>
        {errModalOn && (
          <ConfirmModal onClose={handleErrModal} title="이메일 인증 실패!" content={errMsg} />
        )}
      </ModalPortal>
    </>
  );
}

EmailAuth.propTypes = {
  email: PropTypes.string.isRequired,
  authNum: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
};

export default EmailAuth;

const StyledP = styled.p`
  font-size: 0.9rem;

  &:nth-child(3) {
    margin-bottom: 30px;
  }

  &.info {
    margin: 30px 0;
    color: #888383;
  }

  &.bold {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  &.margin {
    margin-bottom: 20px;
  }
`;
