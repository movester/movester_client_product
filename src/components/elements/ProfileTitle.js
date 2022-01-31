import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function ProfillTitle({ title }) {
  return (
    <StyledTitle>
      <p>&#183; {title}</p>
      <hr />
    </StyledTitle>
  );
}

export default ProfillTitle;

const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  hr {
    margin-bottom: 25px;
  }
`;

ProfillTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
