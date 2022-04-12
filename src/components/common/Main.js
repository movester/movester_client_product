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
  margin-top: 80px;
  height: auto;

  &.profile {
    padding: 40px 5rem;
    min-height: 74vh;
    display: flex;
    @media screen and (max-width: 500px) {
      padding: 40px 2rem;
    }
  }

  &.padding {
    padding: 0 5rem;
  }

  &.record {
    padding: 40px 5rem;
    display: flex;
    @media screen and (max-width: 500px) {
      padding: 40px 2rem;
    }
  }
`;
