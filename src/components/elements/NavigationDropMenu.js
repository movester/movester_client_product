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
      {isAuth && <NavLink to="/mypage/profile">프로필</NavLink>}
      {isAuth && <NavLink to="/mypage/like">찜한 스트레칭</NavLink>}
      {isAuth && <NavLink to="/mypage/stamp">출석도장</NavLink>}
      {isAuth && <NavLink to="/mypage/record">기록</NavLink>}
      {isAuth && <NavLink to="/mypage/profile">로그아웃</NavLink>}
    </NavigationDropMenuWrapper>
  );
}

NavigationDropMenu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

export default NavigationDropMenu;

const NavigationDropMenuWrapper = styled.div`
  display: grid;
  padding: 10px 0;
  grid-template-colums: repeat(1, 1fr);
  row-gap: 20px;
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
