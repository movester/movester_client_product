import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function GrayBg({ children }) {
  return <StyledGrayBg>{children}</StyledGrayBg>;
}

export default GrayBg;

const StyledGrayBg = styled.div`
  width: 100%;
  background-color: rgba(229, 229, 229, 0.6);
  border-radius: 5px;
  padding: 20px;
`;

GrayBg.propTypes = {
  children: PropTypes.node.isRequired,
};
