import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function NavigationDropMenu({ isAuth }) {
  return (
    <NavigationDropMenuWrapper>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/stretching">Stretching</NavLink>
      <NavLink to="/event">Event</NavLink>
      {isAuth && <NavLink to="/mypage/profile">Mypage</NavLink>}
    </NavigationDropMenuWrapper>
  );
}

NavigationDropMenu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default NavigationDropMenu;

const NavigationDropMenuWrapper = styled.div`
  display: grid;
  grid-template-colums: repeat(1, 1fr);
  row-gap: 10px;
  width: 90px;
  position: absolute;
  top: 50px;
  left: 10px;
  background: #fff;
  border: 1px solid gray;
  border-radius: 5px;
  z-index: 10;
  padding: 5px;
  text-align: left;
`;
