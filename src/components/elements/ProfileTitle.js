import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfileTitle({ title }) {
  return (
    <StyledTitle>
      <p>{title}</p>
    </StyledTitle>
  );
}

export default ProfileTitle;

const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

ProfileTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
