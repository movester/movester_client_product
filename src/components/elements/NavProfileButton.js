import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function NavProfileButton({ handleClick }) {
  return <ProfileWrapper onClick={handleClick}>조나현님</ProfileWrapper>;
}

NavProfileButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavProfileButton;

const ProfileWrapper = styled.div`
  width: 105px;
  font-size: 16px;
  color: #2a1598;
  border: 2px solid #2a1598;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active {
    color: #fff;
    background: #2a1598;
    border: 2px solid #fff;
  }
`;
