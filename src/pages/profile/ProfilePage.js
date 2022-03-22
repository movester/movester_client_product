import React from 'react';
import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Profile from '../../components/profile/Profile';

export function ProfilePage() {
  return (
    <Main type="profile">
      <Nav />
      <Profile />
    </Main>
  );
}

export default ProfilePage;
