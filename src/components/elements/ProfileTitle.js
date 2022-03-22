import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfileTitle({ title }) {
  return (
    <StyledTitle>
      <p>&#183; {title}</p>
      <hr />
    </StyledTitle>
  );
}

export default ProfileTitle;

const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  hr {
    margin-bottom: 25px;
  }
`;

ProfileTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
