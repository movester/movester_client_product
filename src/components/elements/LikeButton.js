import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function LikeButton({ stretchingIdx, userIdx, handleLike, active }) {
  return (
    <StyledButton
      stretchingIdx={stretchingIdx}
      userIdx={userIdx}
      onClick={e => {
        e.stopPropagation();
        alert('hi');
        handleLike(idx, active);
      }}
      className={active ? 'active' : ''}
    />
  );
}

LikeButton.propTypes = {
  stretchingIdx: PropTypes.number.isRequired,
  userIdx: PropTypes.number,
  handleLike: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

LikeButton.defaultProps = {
  userIdx: '',

};

const StyledButton = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.darkGray};
  transform: rotate(45deg);
  position: absolute;
  right: 20px;
  bottom: 20px;

  &::before,
  &::after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background: ${({ theme }) => theme.darkGray};
  }

  &::before {
    left: -50%;
  }

  &::after {
    top: -50%;
  }

  &:hover {
    background: ${({ theme }) => theme.darkPurple};
    &:before,
    &:after {
      background: ${({ theme }) => theme.darkPurple};
    }
  }

  &.active {
    background: ${({ theme }) => theme.darkPurple};
    &:before,
    &:after {
      background: ${({ theme }) => theme.darkPurple};
    }
  }
`;
export default LikeButton;
