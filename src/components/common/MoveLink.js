import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function MoveLink({ text, btnText, address }) {
  return (
    <StyledText>
      {text}{' '}
      <Link to={address}>
        <span>{btnText}</span>
      </Link>
    </StyledText>
  );
}

export default MoveLink;

MoveLink.propTypes = {
  text: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

const StyledText = styled.p`
  margin: 10px 0;
  font-size: 14px;

  span {
    font-weight: bold;
  }
`;
