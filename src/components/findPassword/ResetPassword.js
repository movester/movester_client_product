import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import flexCenterAlign from '../../styles/flexCenterAlign';
import FormWrapper from '../../styles/FormWrapper';
import StyledButton from '../../styles/StyledButton';
import StyledInput from '../../styles/StyledInput';
import MoveLink from '../common/MoveLink';
import ModalPortal from '../common/Modal/ModalPortal';
import ConfirmModal from '../common/Modal/ConfirmModal';

function ResetPassword({
  email,
  password,
  passwordConfirm,
  isResetPassword,
  onChange,
  onSubmit,
  errModalOn,
  handleErrModal,
  errMsg,
}) {
  return (
    <EditPasswordWrapper>
      {isResetPassword ? (
        <>
          <img src="/assets/charactor__complete-pw.png" alt="비밀번호 변경 완료 캐릭터" />
          <StyledP className="bold margin">{email} 님</StyledP>
          <StyledP className="margin">비밀번호 재설정을 완료하였습니다.</StyledP>
          <MoveLink text="비밀번호를 변경하셨나요?" address="/login" btnText="로그인" />
        </>
      ) : (
        <>
          <img src="/assets/charactor__change-pw.png" alt="비밀번호 재설정 캐릭터" />
          <StyledP className="bold margin">{email} 님</StyledP>
          <FormWrapper onSubmit={onSubmit}>
            <StyledInput
              className="sign"
              type="password"
              name="password"
              placeholder="비밀번호"
              autoComplete="new-password"
              onChange={onChange}
              value={password}
            />
            <StyledInput
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              autoComplete="new-password"
              onChange={onChange}
              value={passwordConfirm}
            />
            <StyledButton onClick={onSubmit}>비밀번호 재설정하기</StyledButton>
          </FormWrapper>
          {errModalOn && (
            <ModalPortal>
              <ConfirmModal onClose={handleErrModal} title="이메일 인증 메일 전송 실패!" content={errMsg} />
            </ModalPortal>
          )}
        </>
      )}
    </EditPasswordWrapper>
  );
}

ResetPassword.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string.isRequired,
  isResetPassword: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
};

export default ResetPassword;

const EditPasswordWrapper = styled.section`
  ${flexCenterAlign}
`;

const StyledP = styled.p`
  font-size: 0.9rem;

  &.bold {
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 20px;
  }

  &.margin {
    margin-bottom: 20px;
  }
`;