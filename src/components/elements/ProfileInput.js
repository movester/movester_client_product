import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfileInput({ text, name, value, message, onChange }) {
  return (
    <StyledInputWrap className="profile-title">
      <input type="password" name={name} value={value} onChange={onChange} placeholder={text} />
      <p>{value ? message : ''}</p>
    </StyledInputWrap>
  );
}

ProfileInput.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  message: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

ProfileInput.defaultProps = {
  message: (PropTypes.string = ''),
};

export default ProfileInput;

const StyledInputWrap = styled.div`
  width: 60%;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  input {
    width: 100%;
    max-width: 380px;
    height: 40px;
    border-radius: 20px;
    background-color: rgba(196, 196, 196, 0.3);
    border: none;
    padding: 0 15px;
    @media screen and (max-width: 1024px) {
      margin-top: 20px;
    }
  }

  p {
    font-size: 12px;
    color: red;
    padding-left: 12px;
    margin: 5px 0 8px 0;
    text-align: left;
  }
`;
