import React from 'react';
import styled from 'styled-components';
import Main from '../components/common/Main';

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
      <StyledSection>
        {STRETCHING_LIST.map(stretching => (
          <Item>
            <ImageWrap>
              <StyledImg src="/assets/stretching-list.png" alt="스트레칭 대표 이미지" />
              <LikeButton />
            </ImageWrap>
            <Title>{stretching.title}</Title>
            <Category>{stretching.category}</Category>
            <Posture>{stretching.posture}</Posture>
            <Effect>{stretching.effect}</Effect>
          </Item>
        ))}
      </StyledSection>
    </Main>
  );
}

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
  background-color: #f0c36a;
  border-radius: 10px;

  & + & {
    margin-left: 2rem;
  }
`;

const StyledSection = styled.section`
  height: auto;
  padding: 2rem 5rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 5rem;
  justify-content: center;
`;

const Item = styled.div`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ImageWrap = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  border: 1px solid gray;
  width: 100%;
  border-radius: 15px;
`;

const LikeButton = styled.div`
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.darkGray};
  transform: rotate(45deg);
  position: absolute;
  right: 20px;
  bottom: 20px;

  &::before,
  &::after {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background: ${({ theme }) => theme.darkGray};
  }

  &::before {
    left: -50%;
  }

  &::after {
    top: -50%;
  }
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 800;
  padding: 10px;
`;

const Category = styled.p`
  font-size: 16px;
  padding: 0 10px;
`;

const Posture = styled.p`
  font-size: 16px;
  padding: 8px 10px;
  color: #615b5b;
`;

const Effect = styled.p`
  font-size: 16px;
  padding: 0 10px;
  color: ${({ theme }) => theme.darkPurple};
`;

export default StretchingList;
