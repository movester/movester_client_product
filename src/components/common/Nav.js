import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutModal from './Modal/LogoutModal';

function Nav() {
  const user = useSelector(state => state.auth.user);
  const [modalOn, setModalOn] = useState(false);

  const handleModal = () => {
    setModalOn(prev => !prev);
  };

  const mypageList = [
    {
      id: 0,
      title: '프로필',
      path: '/mypage/profile',
    },
    {
      id: 1,
      title: '찜한 스트레칭',
      path: '/mypage/like',
    },
    {
      id: 2,
      title: '출석도장',
      path: '/mypage/stamp',
    },
    {
      id: 3,
      title: '기록',
      path: '/mypage/record',
    },
  ];

  const OnModal = () => {
    setModalOn(prev => !prev);
  };

  return (
    <>
      <StyledNavWrap>
        <p>{user.name}</p>
        <p className="email">{user.email}</p>
        <ul>
          {mypageList.map(item => (
            <li key={item.id}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
        <button type="button" onClick={OnModal}>
          로그아웃
        </button>
      </StyledNavWrap>
      {modalOn && <LogoutModal onClose={handleModal} />}
    </>
  );
}

export default Nav;

const StyledNavWrap = styled.nav`
  width: 200px;
  height: 245px;
  padding: 0 4px;
  border-radius: 5px;
  margin-right: 60px;
  p {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: bold;
  }
  ul{
    margin-top 43px;
  }
  li {
    margin-bottom: 15px;
    a.active {
      color: #2a1598;
      font-weight: 700;
    }
    a:last-child{
      margin-bottom: 0;
    }
  }
  button {
    font-size: 16px;
  }
  .email {
    font-size: 12px;
    font-weight: normal;
    color: #595959;
  }
  @media screen and (max-width: 850px) {
    display:none;
  }
`;
