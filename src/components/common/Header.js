import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavProfileButton from '../elements/NavProfileButton';
import ProfileDropMenu from '../molecules/ProfileDropMenu';

function Header() {
  const [isLoging, setIsLoging] = useState(true);
  const [isClick, setisClick] = useState(false);
  console.log(isLoging, typeof setIsLoging);

  const handleClick = () => {
    setisClick(prev => !prev);
  };

  return (
    <HeaderWrapper>
      <HeaderLeftBlock>
        <Link to="/">
          <img src="/assets/logo.png" alt="뭅스터 로고" />
        </Link>
        <StyledNavigation>
          <Link to="/about">About</Link>
          <Link to="/stretching">Stretching</Link>
          <Link to="/event">Event</Link>
        </StyledNavigation>
      </HeaderLeftBlock>
      <HeaderRightBlock>
        <StyledNavigation>
          {isLoging ? (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <NavProfileButton handleClick={handleClick} />
              {isClick && <ProfileDropMenu />}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 5rem;

  border-bottom: 2px solid #2a1598;
  background: #fff;

  img {
    width: 200px;
    margin-right: 30px;
  }
`;

const HeaderLeftBlock = styled.div`
  display: flex;
`;

const HeaderRightBlock = styled.div``;

const StyledNavigation = styled.nav`
  display: flex;
  font-size: 20px;
  font-weight: 400;
  line-height: 2;

  a {
    margin: 0 30px;
    cursor: pointer;
  }
`;
