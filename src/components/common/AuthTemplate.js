import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function AuthTemplate( { children, title }) {

  return (
    <AuthTemplateWrapper>
      <StyledTitle style={{ margin: '40px' }}>{title}</StyledTitle>
      {children}
    </AuthTemplateWrapper>
  );
}

AuthTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default AuthTemplate;

const AuthTemplateWrapper = styled.div`
  height: 80vh;
  padding-top: 50px;
`;

const StyledTitle = styled.h2`
  font-size: 28px;
  text-align: center;
`;
