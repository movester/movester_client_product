import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import NavProfileButton from '../elements/NavProfileButton';
import ProfileDropMenu from '../molecules/ProfileDropMenu';
import NavigationDropMenu from '../molecules/NavigationDropMenu';

function Header() {
  const { isLogin, user } = useSelector(({ auth }) => ({
    isLogin: auth.isLogin,
    user: auth.user,
  }));

  const [isInfo, setIsInfo] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const handleInfo = () => {
    setIsInfo(prev => !prev);
  };
  const handleMenu = () => {
    setIsMenu(prev => !prev);
  };

  return (
    <HeaderWrapper>
      <HeaderLeftBlock>
        {isMenu ? <CloseIcon onClick={handleMenu} /> : <MenuIcon name="menu" onClick={handleMenu} />}
        {isMenu && <NavigationDropMenu />}
        <Link to="/">
          <img src="/assets/logo.png" alt="뭅스터 로고" />
        </Link>
        <div className="navigation-wrapper">
          <StyledNavigation>
            <Link to="/about">About</Link>
            <Link to="/stretching">Stretching</Link>
            <Link to="/event">Event</Link>
          </StyledNavigation>
        </div>
      </HeaderLeftBlock>
      <HeaderRightBlock>
        <StyledNavigation>
          {isLogin ? (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <NavProfileButton handleClick={handleInfo} user={user} />
              {isInfo && <ProfileDropMenu user={user} />}
            </div>
          ) : (
            <>
              <Link to="/join">Join</Link> | <Link to="/login">Login</Link>
            </>
          )}
        </StyledNavigation>
      </HeaderRightBlock>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;

  border-bottom: 2px solid #2a1598;
  background: #fff;

  svg {
    display: none;
  }

  img {
    width: 10rem;
  }

  .navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  @media (max-width: 850px) {
    padding: 0;

    svg {
      display: block;
      margin: 0 0.5rem;
      cursor: pointer;
    }
    img {
      width: 5rem;
    }
    .navigation-wrapper {
      display: none;
    }
  }
`;

const HeaderLeftBlock = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 850px) {
    justify-content: flex-start;
  }
`;

const HeaderRightBlock = styled.div``;

const StyledNavigation = styled.nav`
  display: flex;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2;

  a {
    margin: 0 1rem;
    cursor: pointer;
  }

  @media (max-width: 850px) {
    font-size: 1rem;
  }
`;
