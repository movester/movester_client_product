import React, { useState } from 'react';
import styled from 'styled-components';
import flexCenterAlign from '../../../styles/flexCenterAlign';
import FormWrapper from '../../../styles/FormWrapper';
import StyledButton from '../../../styles/StyledButton';
import StyledInput from '../../../styles/StyledInput';
import MoveLink from '../../common/MoveLink';
import ReCaptcha from '../../common/ReCaptcha';

function EditPassword() {
  const [isEdited, setIsEdited] = useState(false);
  const onSubmit = e => {
    e.preventDefault();
    setIsEdited(prev => !prev);
  };
  return (
    <EditPasswordWrapper>
      <h2>비밀번호 재설정</h2>
      {isEdited ? (
        <>
          <img src="/assets/charactor__complete-pw.png" alt="비밀번호 변경 완료 캐릭터" />
          <span>jnhro1@gmail.com</span>
          <p>비밀번호 재설정을 완료하였습니다.</p>
          <MoveLink text="비밀번호를 변경하셨나요?" address="/login" btnText="로그인" />
        </>
      ) : (
        <>
          <img src="/assets/charactor__change-pw.png" alt="비밀번호 재설정 캐릭터" />
          <span>jnhro1@gmail.com 님</span>
          <FormWrapper onSubmit={onSubmit}>
            <StyledInput type="password" name="password" placeholder="비밀번호" autoComplete="new-password" />
            <StyledInput
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              autoComplete="new-password"
            />
            <ReCaptcha />
            <StyledButton>비밀번호 재설정하기</StyledButton>
          </FormWrapper>
        </>
      )}
    </EditPasswordWrapper>
  );
}

export default EditPassword;

const EditPasswordWrapper = styled.section`
  ${flexCenterAlign}

  h2 {
    font-size: 36px;
  }
`;
