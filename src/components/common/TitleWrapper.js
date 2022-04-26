import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function TitleWrapper({ children, title }) {
  return (
    <StyledWrapper>
      <StyledTitle style={{ margin: '40px' }}>{title}</StyledTitle>
      {children}
    </StyledWrapper>
  );
}

TitleWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default TitleWrapper;

const StyledWrapper = styled.div`
  margin-top: 80px;
  min-height: 80vh;
  padding-top: 50px;
  text-align: center;
`;

const StyledTitle = styled.h2`
  font-size: 28px;
  text-align: center;
`;
