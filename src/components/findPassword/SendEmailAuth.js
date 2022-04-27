import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import flexCenterAlign from '../../styles/flexCenterAlign';
import FormWrapper from '../../styles/FormWrapper';
import StyledButton from '../../styles/StyledButton';
import StyledInput from '../../styles/StyledInput';
import MoveLink from '../common/MoveLink';
import ConfirmModal from '../common/Modal/ConfirmModal';

function SendEmailAuth({ email, emailMessage, onChange, onSubmit, errModalOn, handleErrModal }) {
  return (
    <>
      <FindPasswordWrapper>
        <p className="wrapper__todo">가입하신 이메일을 작성해주세요.</p>
        <FormWrapper onSubmit={onSubmit}>
          <StyledInput
            className="sign"
            type="email"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={onChange}
          />
          <p className="email-message">{emailMessage}</p>
          <p className="wrapper__info">해당 이메일로 계정 인증을 위한 메일이 발송됩니다.</p>
          <StyledButton>비밀번호 재설정하기</StyledButton>
        </FormWrapper>
        <MoveLink text="아직 계정이 없으신가요?" address="/join" btnText="계정 만들기" />
        <MoveLink text="이미 계정이 있으신가요?" address="/login" btnText="로그인" />
      </FindPasswordWrapper>
      {errModalOn && (
        <ConfirmModal onClose={handleErrModal} title="이메일 인증 메일 전송 실패" content="잘못된 이메일입니다." />
      )}
    </>
  );
}

SendEmailAuth.propTypes = {
  email: PropTypes.string.isRequired,
  emailMessage: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
};

export default SendEmailAuth;

const FindPasswordWrapper = styled.section`
  ${flexCenterAlign}

  h2 {
    font-size: 36px;
  }

  p {
    text-align: center;

    &.email-message {
      width: 100%;
      text-align: left;
      margin-bottom: 10px;
      font-size: 12px;
    }
  }

  .wrapper__todo {
    font-size: 14px;
    margin: 20px 0;
    text-align: center;
  }

  .wrapper__info {
    font-size: 12px;
    margin-bottom: 10px;
  }

  @media (max-width: 400px) {
    .wrapper__todo {
      transform: translateX(-30px);
    }
  }
`;
