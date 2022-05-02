import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProfileTitle from '../elements/ProfileTitle';
import ProfileInput from '../elements/ProfileInput';
import ConfirmModal from '../common/Modal/ConfirmModal';
import ResignModal from '../common/Modal/ResignModal';
import StyledButton from '../../styles/StyledButton';

function Resign({
  email,
  emailMessage,
  password,
  passwordMessage,
  onChange,
  onSubmit,
  onSubmitByKakao,
  modalOn,
  handleModal,
  errModalOn,
  handleErrModal,
  errMsg,
}) {
  const isKakao = useSelector(state => state.auth.user.isKakao);
  return (
    <StyledContentWrap onSubmit={isKakao ? onSubmitByKakao : onSubmit}>
      <ProfileTitle className="margin">회원 탈퇴</ProfileTitle>
      {isKakao ? (
        <>
          {' '}
          <ProfileInput text="이메일" name="email" value={email} message={emailMessage} onChange={onChange} />
          <StyledButton type="submit" className="left">
            회원 탈퇴
          </StyledButton>
        </>
      ) : (
        <>
          {' '}
          <ProfileInput
            text="비밀번호"
            name="password"
            value={password}
            message={passwordMessage}
            onChange={onChange}
          />
          <StyledButton type="submit" className="left">
            회원 탈퇴
          </StyledButton>
        </>
      )}
      {modalOn && <ResignModal onClose={handleModal} title="회원 탈퇴" />}
      {errModalOn && <ConfirmModal onClose={handleErrModal} title="회원 탈퇴 실패" content={errMsg} />}
    </StyledContentWrap>
  );
}

Resign.propTypes = {
  email: PropTypes.string,
  emailMessage: PropTypes.string,
  password: PropTypes.string,
  passwordMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSubmitByKakao: PropTypes.func.isRequired,
  modalOn: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  errModalOn: PropTypes.bool.isRequired,
  handleErrModal: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
};

Resign.defaultProps = {
  email: '',
  emailMessage: '',
  password: '',
  passwordMessage: '',
};

export default Resign;

const StyledContentWrap = styled.form`
  width: 100%;
`;
