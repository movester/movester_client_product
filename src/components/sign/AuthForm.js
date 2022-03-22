import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MoveLink from '../common/MoveLink';

import flexCenterAlign from '../../styles/flexCenterAlign';
import ModalPortal from '../common/Modal/ModalPortal';
import EmailAuthModal from '../common/Modal/EmailAuthModal';
import StyledInput from '../../styles/StyledInput';
import StyledButton from '../../styles/StyledButton';
import FormWrapper from '../../styles/FormWrapper';

function AuthForm({
  type,
  form,
  onChange,
  onSubmit,
  modalOn,
  emailMessage,
  passwordMessage,
  passwordConfirmMessage,
  nameMessage,
  isEmail,
  isPassword,
  isPasswordConfirm,
  isName,
}) {
  return (
    <>
      <FormWrapper onSubmit={onSubmit}>
        <StyledInput
          type="email"
          name="email"
          placeholder="이메일"
          autoComplete="email"
          onChange={onChange}
          value={form?.email}
        />
        <p className="email-message">{!isEmail && emailMessage}</p>
        <StyledInput
          type="password"
          name="password"
          placeholder="비밀번호"
          autoComplete="new-password"
          onChange={onChange}
          value={form?.password}
        />
        <p className="password-message">{!isPassword && passwordMessage}</p>
        {type === 'join' && (
          <>
            <StyledInput
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              autoComplete="new-password"
              onChange={onChange}
              value={form?.passwordConfirm}
            />
            <p className="confirm-message">{!isPasswordConfirm && passwordConfirmMessage}</p>
            <StyledInput
              type="text"
              name="username"
              placeholder="이름"
              autoComplete="username"
              onChange={onChange}
              value={form?.username}
            />
            <StyledP className="name-message">{!isName && nameMessage}</StyledP>
          </>
        )}
        <CheckboxWrapper>
          {type === 'login' ? (
            <label className="auto-login">
              <input type="checkbox" />
              <StyledSpan>자동 로그인</StyledSpan>
            </label>
          ) : (
            <>
              <label className="terms">
                <input type="checkbox" />
                <StyledSpan>이용약관 및 개인정보 처리 방침에 동의합니다.</StyledSpan>
              </label>
              <StyledP>이메일 인증을 통해 회원가입이 진행됩니다.</StyledP>
            </>
          )}
        </CheckboxWrapper>
        {type === 'login' ? (
          <>
            <StyledButton type="submit" className="login-btn" aria-label="login">
              로그인 하기
            </StyledButton>
            <StyledButton type="button" className="kakao-login" aria-label="kakao-login" />
            <Link to="/login/accountInfoFound" style={{ margin: '20px 0' }}>
              비밀번호 찾기
            </Link>
            <MoveLink text="아직 계정이 없으신가요?" address="/join" btnText="계정 만들기" />
          </>
        ) : (
          <>
            <StyledButton type="submit" className="join-btn" aria-label="join">
              회원가입 하기
            </StyledButton>
            <MoveLink text="이미 계정이 있으신가요?" address="/login" btnText="로그인" />
          </>
        )}
      </FormWrapper>
      {modalOn && (
        <ModalPortal>
          <EmailAuthModal />
        </ModalPortal>
      )}
    </>
  );
}

AuthForm.propTypes = {
  type: PropTypes.string.isRequired,
  form: PropTypes.instanceOf(Object).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailMessage: PropTypes.string.isRequired,
  passwordMessage: PropTypes.string.isRequired,
  passwordConfirmMessage: PropTypes.string,
  nameMessage: PropTypes.string,
  isEmail: PropTypes.bool.isRequired,
  isPassword: PropTypes.bool.isRequired,
  isPasswordConfirm: PropTypes.bool,
  isName: PropTypes.bool,
  modalOn: PropTypes.bool,
};

AuthForm.defaultProps = {
  modalOn: false,
  passwordConfirmMessage: '',
  nameMessage: '',
  isPasswordConfirm: false,
  isName: false,
};

export default AuthForm;

const CheckboxWrapper = styled.div`
  position: relative;
  ${flexCenterAlign}

  .auto-login {
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(150%);
    cursor: pointer;

    & span {
      position: relative;
      top: -1px;
    }

    @media (max-width: 400px) {
      transform: translateX(100%);
    }
  }

  .terms {
    cursor: pointer;
  }

  p {
    text-align: center;
    margin: 20px auto;
  }
`;

const StyledSpan = styled.span`
  font-size: 14px;
`;

const StyledP = styled.p`
  font-size: 14px;
`;
