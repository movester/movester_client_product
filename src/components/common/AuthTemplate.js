import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function AuthTemplate({ children }) {
  return <AuthTemplateWrapper>{children}</AuthTemplateWrapper>;
}

AuthTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthTemplate;

const AuthTemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
`;
