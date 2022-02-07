import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import flexCenterAlign from '../../styles/flexCenterAlign';

function NavigationDropMenu() {
  return (
    <NavigationDropMenuWrapper>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/stretching">Stretching</NavLink>
      <NavLink to="/event">Event</NavLink>
    </NavigationDropMenuWrapper>
  );
}

export default NavigationDropMenu;

const NavigationDropMenuWrapper = styled.div`
  ${flexCenterAlign}
  width: 120px;
  position: absolute;
  top: 50px;
  left: 10px;
  background: #fff;
  border: 1px solid #615b5b;
  border-radius: 10px;
  z-index: 10;
  padding: 16px;
`;
