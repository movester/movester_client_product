import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function NavProfileButton({ handleClick }) {
  return <ProfileWrapper onClick={e => handleClick(e)}>조나현님</ProfileWrapper>;
}

NavProfileButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default NavProfileButton;

const ProfileWrapper = styled.div`
  width: 105px;
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
