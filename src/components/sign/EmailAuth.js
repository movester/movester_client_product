import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledButton from '../../styles/StyledButton';
import StyledInput from '../../styles/StyledInput';
import ModalPortal from '../common/Modal/ModalPortal';
import LinkModal from '../common/Modal/LinkModal';
import ConfirmModal from '../common/Modal/ConfirmModal';

function EmailAuth({ authNum, onChange, onSubmit, linkModalOn, handleLinkModal, errModalOn, handleErrModal, errMsg }) {
  return (
    <>
      <StyledP>입력하신 이메일 계정으로 인증 메일을 발송하였습니다.</StyledP>
      <StyledP>인증을 통해 가입을 완료해 주세요.</StyledP>
      <StyledInput type="text" name="authNum" value={authNum} placeholder="인증번호" onChange={onChange} />
      <StyledButton onClick={onSubmit}>이메일 인증하기</StyledButton>
      <StyledP className="info">혹시 메일을 받지 못하셨다면 스팸 메일함을 확인해주세요.</StyledP>
      <ModalPortal>
        {linkModalOn && (
          <LinkModal
            onClose={handleLinkModal}
            title="회원가입 성공!"
            content="가입한 계정으로 로그인하세요."
            btnMsg="로그인하기"
            link="/login"
          />
        )}
      </ModalPortal>
      <ModalPortal>
        {errModalOn && (
          <ConfirmModal onClose={handleErrModal} title="이메일 인증 실패!" content={errMsg} />
        )}
      </ModalPortal>
    </>
  );
}

EmailAuth.propTypes = {
  authNum: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  linkModalOn: PropTypes.bool.isRequired,
  handleLinkModal: PropTypes.func.isRequired,
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
`;
