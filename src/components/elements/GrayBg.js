import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function GrayBg({ children }) {
  return <StyledGrayBg className="gray-bg">{children}</StyledGrayBg>;
}

const StyledGrayBg = styled.div`
  width: 100%;
  border-radius: 5px;
  padding: 20px;

  p {
    &.title {
      margin-bottom: 16px;
    }
  }

  img {
    &.image {
      width: 50%;
    }
  }
`;
export { GrayBg, StyledGrayBg };

GrayBg.propTypes = {
  children: PropTypes.node.isRequired,
};
