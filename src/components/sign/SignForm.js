import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MoveLink from '../common/MoveLink';
import flexCenterAlign from '../../styles/flexCenterAlign';
import ModalPortal from '../common/Modal/ModalPortal';
import ConfirmModal from '../common/Modal/ConfirmModal';
import LinkModal from '../common/Modal/LinkModal';
import StyledInput from '../../styles/StyledInput';
import StyledButton from '../../styles/StyledButton';
import FormWrapper from '../../styles/FormWrapper';

function SignForm({
  type,
  onChange,
  onSubmit,
  email,
  emailMessage,
  password,
  passwordMessage,
  passwordConfirm,
  passwordConfirmMessage,
  username,
  nameMessage,
  isSubmit,
  errModalOn,
  handleErrModal,
  errMsg,
  linkModalOn,
  handleLinkModal,
  userIdx,
}) {
  return (
    <>
      <FormWrapper onSubmit={onSubmit}>
        <StyledWrapper>
          <StyledInput
            className="sign"
            type="email"
            name="email"
            placeholder="이메일"
            autoComplete="email"
            onChange={onChange}
            value={email}
          />
          <StyledP className="email-message">{emailMessage}</StyledP>
          <StyledInput
            className="sign"
            type="password"
            name="password"
            placeholder="비밀번호"
            autoComplete="new-password"
            onChange={onChange}
            value={password}
          />
          <StyledP className="password-message">{passwordMessage}</StyledP>
          {type === 'join' && (
            <>
              <StyledInput
                className="sign"
                type="password"
                name="passwordConfirm"
                placeholder="비밀번호 확인"
                autoComplete="new-password"
                onChange={onChange}
                value={passwordConfirm}
              />
              <StyledP className="confirm-message">{passwordConfirmMessage}</StyledP>
              <StyledInput
                className="sign"
                type="text"
                name="username"
                placeholder="이름"
                autoComplete="username"
                onChange={onChange}
                value={username}
              />
              <StyledP className="name-message">{nameMessage}</StyledP>
              <CheckboxWrapper>
                <label className="terms">
                  <input type="checkbox" />
                  <StyledSpan>이용약관 및 개인정보 처리 방침에 동의합니다.</StyledSpan>
                </label>
                <StyledP>이메일 인증을 통해 회원가입이 진행됩니다.</StyledP>
              </CheckboxWrapper>
            </>
          )}
          {type === 'login' ? (
            <>
              <StyledButton type="submit" className="login-btn" aria-label="login" disalbed={!isSubmit}>
                로그인 하기
              </StyledButton>
              <StyledButton type="button" className="kakao-login" aria-label="kakao-login" />
              <StyledLink to="/login/findPassword">비밀번호 찾기</StyledLink>
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
        </StyledWrapper>
      </FormWrapper>
      <ModalPortal>
        {errModalOn && (
          <ConfirmModal
            onClose={handleErrModal}
            title={type === 'login' ? '로그인 실패!' : '회원가입 실패!'}
            content={errMsg}
          />
        )}
      </ModalPortal>
      <ModalPortal>
        {linkModalOn && (
          <LinkModal
            onClose={handleLinkModal}
            title="로그인 실패!"
            content="이메일 인증을 진행해주세요!"
            btnMsg="이메일 인증하러가기"
            link={`/join/emailAuth/${userIdx}`}
          />
        )}
      </ModalPortal>
    </>
  );
}

SignForm.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  emailMessage: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordMessage: PropTypes.string.isRequired,
  passwordConfirm: PropTypes.string,
  passwordConfirmMessage: PropTypes.string,
  username: PropTypes.string,
  nameMessage: PropTypes.string,
  isSubmit: PropTypes.bool.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
  linkModalOn: PropTypes.bool,
  handleLinkModal: PropTypes.func,
  userIdx: PropTypes.number,
};

SignForm.defaultProps = {
  passwordConfirmMessage: '',
  nameMessage: '',
  passwordConfirm: '',
  username: '',
  linkModalOn: false,
  handleLinkModal: () => {},
  userIdx: 0,
};

export default SignForm;

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

const StyledWrapper = styled.div`
  width: auto;
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 14px;
  margin: 20px 0;
  text-align: center;
`;