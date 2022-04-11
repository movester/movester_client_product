import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Main from '../common/Main';
import StretchingItem from '../elements/StretchingItem';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../util/stretchingEnum';

function StretchingList({ stretchings, handleTagModal }) {
  return (
    <Main>
      <StyledNav>
        <MainCategory>
          <StyledMainBtn>부위별</StyledMainBtn>
          <StyledBar>|</StyledBar>
          <StyledMainBtn>자세별</StyledMainBtn>
          <StyledBar>|</StyledBar>
          <StyledMainBtn>효과별</StyledMainBtn>
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
        <StyledTagBtn onClick={handleTagModal}>태그 맞춤 동작 찾기</StyledTagBtn>
      </StyledNav>
      <StretchingContainer>
        {stretchings.map(stretching => {
          const { stretchingIdx, title, mainBody, subBody, effect, posture, image } = stretching;
          return (
            <Link key={stretchingIdx} to={`/stretching/detail/${stretchingIdx}`}>
              <StretchingItem
                title={title }
                category={`${mainBodyEnum[mainBody]} - ${subBodyEnum[subBody]}`}
                posture={posture ? posture.map(v => postureEnum[v]).join(' · ') : '-'}
                effect={effect ? effect.map(v => effectEnum[v]).join(' · ') : '-'}
                image={image}
              />
            </Link>
          );
        })}
      </StretchingContainer>
    </Main>
  );
}

StretchingList.propTypes = {
  stretchings: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleTagModal: PropTypes.func.isRequired,
};

export default StretchingList;

const StyledNav = styled.nav`
  width: 100%;
  padding: 1rem 5rem;
  border-bottom: 2px solid ${({ theme }) => theme.darkPurple};
  position: relative;

  @media screen and (max-width: 600px) {
    padding: 1rem 3rem;
  }
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
  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const StyledSubBtn = styled.button`
  font-size: 18px;
  width: 80px;
  height: 40px;
  border-radius: 10px;

  & + & {
    margin-left: 2rem;

    @media screen and (max-width: 600px) {
      margin-left: 1rem;
    }
  }

  @media screen and (max-width: 600px) {
    width: 60px;
    height: 30px;
  }

  @media screen and (max-width: 400px) {
    width: auto;
    height: 30px;

    & + & {
      margin: 0;
    }
  }

  &:nth-child(1) {
    background-color: #d6b4b4;
  }

  &:nth-child(2) {
    background-color: #f0c36a;
  }

  &:nth-child(3) {
    background-color: #bfd0a2;
  }

  &:nth-child(4) {
    background-color: #97bfb8;
  }

  &:nth-child(5) {
    background-color: #bf97be;
  }
`;

const StyledTagBtn = styled.button`
  font-size: 16px;
  color: ${({ theme }) => theme.darkPurple};
  width: 150px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.darkPurple};
  border-radius: 10px;
  position: absolute;
  top: 1rem;
  right: 5rem;

  @media screen and (max-width: 770px) {
    position: relative;
    top: 0;
    right: 0;
    margin-top: 1rem;
  }
`;

const StretchingContainer = styled.section`
  height: auto;
  padding: 2rem 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 5rem;
  justify-content: center;

  @media screen and (max-width: 1340px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem 3rem;
  }
`;
