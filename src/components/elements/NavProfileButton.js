import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function NavProfileButton({ handleClick, user }) {
  return <ProfileWrapper onClick={e => handleClick(e)}>{user.name}님</ProfileWrapper>;
}

NavProfileButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    userIdx: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavProfileButton;

const ProfileWrapper = styled.div`
  min-width: 150px;
  width: 100%;
  height: 100%;
  font-size: 1rem;
  color: #2a1598;
  border: 2px solid #2a1598;
  border-radius: 20px;
  padding: 0.3rem 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active {
    color: #fff;
    background: #2a1598;
    border: 2px solid #fff;
  }

  @media (max-width: 1050px) {
    display: none;
  }
`;
