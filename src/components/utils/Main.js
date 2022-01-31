import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Main({ children, type }) {
  return <StyledMain className={type}>{children}</StyledMain>;
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};
Main.defaultProps = {
  type: '',
};

export default Main;

const StyledMain = styled.main`
  height: 74vh;
  margin-top: 80px;
  padding: 40px 5rem;
  &.profill {
    display: flex;
  }
`;
