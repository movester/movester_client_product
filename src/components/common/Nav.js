import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Nav() {
  const mypageList = [
    {
      id: 0,
      title: '프로필',
      path: '/mypage/profile',
    },
    {
      id: 1,
      title: '찜한 스트레칭',
      path: '/mypage/basket',
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

  return (
    <StyledNavWrap>
      <p>유송현님</p>
      <p className="email">ysh2987@gmail.com</p>
      <ul>
        {mypageList.map(item => (
          <li key={item.id}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </StyledNavWrap>
  );
}

export default Nav;

const StyledNavWrap = styled.nav`
  width: 200px;
  height: 215px;
  text-align: center;
  padding: 20px 43px;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 60px;
  p {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  ul{
    margin-top 20px;
  }
  li {
    margin-bottom: 15px;
    a.active {
      color: #2a1598;
    }
    a:last-child{
      margin-bottom: 0;
    }
  }
  .email {
    font-size: 12px;
    font-weight: normal;
  }
  @media screen and (max-width: 1024px) {
    display:none;
  }
`;
