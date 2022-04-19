import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LogoutModal from '../common/Modal/LogoutModal';

function NavigationDropMenu({ isAuth, handleMenu }) {
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(prev => !prev);
  };
  return (
    <NavigationDropMenuWrapper>
      <NavLink to="/about">
        <button type="button" onClick={handleMenu}>
          About
        </button>
      </NavLink>
      <NavLink to="/stretching">
        <button type="button" onClick={handleMenu}>
          Stretching
        </button>
      </NavLink>
      <NavLink to="/event">
        <button type="button" onClick={handleMenu}>
          Event
        </button>
      </NavLink>
      {isAuth && (
        <NavLink to="/mypage/profile">
          <button type="button" onClick={handleMenu}>
            프로필
          </button>
        </NavLink>
      )}
      {isAuth && (
        <NavLink to="/mypage/like">
          <button type="button" onClick={handleMenu}>
            찜한 스트레칭
          </button>
        </NavLink>
      )}
      {isAuth && (
        <NavLink to="/mypage/stamp">
          <button type="button" onClick={handleMenu}>
            출석도장
          </button>
        </NavLink>
      )}
      {isAuth && (
        <NavLink to="/mypage/record">
          <button type="button" onClick={handleMenu}>
            기록
          </button>
        </NavLink>
      )}
      {isAuth && (
        <button type="button" onClick={handleModal}>
          로그아웃
        </button>
      )}
      {modalOn && (
        <LogoutModal
          onClose={() => {
            handleMenu();
            handleModal();
          }}
        />
      )}
    </NavigationDropMenuWrapper>
  );
}

NavigationDropMenu.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
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

  button {
    text-align: left;
  }
`;
