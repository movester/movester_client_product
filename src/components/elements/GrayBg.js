import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function GrayBg({ children }) {
  return <StyledGrayBg className="gray-bg">{children}</StyledGrayBg>;
}

const StyledGrayBg = styled.div`
  width: 100%;
  background-color: rgba(229, 229, 229, 0.6);
  border-radius: 5px;
  padding: 20px;
`;
export { GrayBg, StyledGrayBg };

GrayBg.propTypes = {
  children: PropTypes.node.isRequired,
};
