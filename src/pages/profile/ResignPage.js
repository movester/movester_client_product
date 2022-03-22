import React, { useState } from 'react';
import Main from '../../components/common/Main';
import Nav from '../../components/common/Nav';
import Resign from '../../components/profile/Resign';

function ResignPage() {
  const [modalOn, setModalOn] = useState(false);
  // const [input, setInput] = useState('');
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  console.log(handleModal)
  // const onChange = e => {
  //   setInput(e.target.value);
  // };
  return (
    <Main type="profile">
      <Nav />
      <Resign />
    </Main>
  );
}

export default ResignPage;
