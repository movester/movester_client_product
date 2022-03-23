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
  width: 100px;
  font-size: 1rem;
  color: #2a1598;
  border: 2px solid #2a1598;
  border-radius: 10px;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active {
    color: #fff;
    background: #2a1598;
    border: 2px solid #fff;
  }

  @media (max-width: 850px) {
    margin-right: 1.5rem;
  }
`;
