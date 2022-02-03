import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../components/common/Main';
import StretchingItem from '../components/elements/StretchingItem';
import ModalPortal from '../components/common/Modal/ModalPortal';
import StretchingTagModal from '../components/common/Modal/StretchingTagModal';

const STRETCHING_LIST = [
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
];

function StretchingList() {
  const [modalOn, setModalOn] = useState(true);
  const handleModal = () => {
    setModalOn(!modalOn);
  };
  return (
    <Main>
      <StyledNav>
        <MainCategory>
          <StyledMainBtn>부위별</StyledMainBtn>
          <StyledBar>|</StyledBar>
          <StyledMainBtn>자세별</StyledMainBtn>
          <StyledBar>|</StyledBar>
          <StyledMainBtn>효과별</StyledMainBtn>
          <StyledTagBtn>태그 맞춤 동작 찾기</StyledTagBtn>
        </MainCategory>
        <CurrentCategory>
          <StyledCurBtn>전체</StyledCurBtn>
          <StyledArrow>&gt;</StyledArrow>
          <StyledCurBtn>상체</StyledCurBtn>
          <StyledArrow>&gt;</StyledArrow>
          <StyledCurBtn>목/어깨</StyledCurBtn>
        </CurrentCategory>
        <SubCategory>
          <StyledSubBtn>전신</StyledSubBtn>
          <StyledSubBtn>상체</StyledSubBtn>
          <StyledSubBtn>하체</StyledSubBtn>
          <StyledSubBtn>코어</StyledSubBtn>
        </SubCategory>
      </StyledNav>
      <StretchingContainer>
        {STRETCHING_LIST.map(stretching => (
         <Link to="/stretching/detail">
         <StretchingItem
            title={stretching.title}
            category={stretching.category}
            posture={stretching.posture}
            effect={stretching.effect}
          />
        </Link>
        ))}
      </StretchingContainer>
      <ModalPortal>{modalOn && <StretchingTagModal onClose={handleModal} title="계정 삭제" />}</ModalPortal>
    </Main>
  );
}

export default StretchingList;

const StyledNav = styled.nav`
  width: 100%;
  padding: 1rem 5rem;
  border-bottom: 2px solid ${({ theme }) => theme.darkPurple};
`;

const MainCategory = styled.div`
  font-size: 18px;
`;

const StyledMainBtn = styled.button`
  font-size: 18px;

  & + & {
    margin-left: 1rem;
  }
`;

const StyledBar = styled.span`
  font-size: 18px;
  margin: 1rem;
`;

const StyledTagBtn = styled.button`
  font-size: 16px;
  color: ${({ theme }) => theme.darkPurple};
  width: 150px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.darkPurple};
  border-radius: 10px;
  float: right;
`;

const CurrentCategory = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin: 1rem 0;
`;

const StyledArrow = styled.span`
  font-size: 20px;
  margin: 1rem;
`;

const StyledCurBtn = styled.button`
  font-size: 20px;

  & + & {
    margin-left: 1rem;
  }
`;

const SubCategory = styled.div`
  font-size: 20px;
`;

const StyledSubBtn = styled.button`
  font-size: 18px;
  width: 80px;
  height: 40px;
  border-radius: 10px;

  & + & {
    margin-left: 2rem;
  }

  &:nth-child(1) {
    background-color: #D6B4B4;
  }

  &:nth-child(2) {
    background-color: #F0C36A;
  }

  &:nth-child(3) {
    background-color: #BFD0A2;
  }

  &:nth-child(4) {
    background-color: #97BFB8;
  }

  &:nth-child(5) {
    background-color: #BF97BE;
  }
`;

const StretchingContainer = styled.section`
  height: auto;
  padding: 2rem 5rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 5rem;
  justify-content: center;
`;
