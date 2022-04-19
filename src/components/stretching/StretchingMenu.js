import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { mainBodyArr, subBodyArr, subBodyEnum, postureArr, effectArr } from '../../util/stretchingEnum';

function StretchingMenu({ handleTagModal, searchType, handleSearchType, main, handleMain, sub, handleSub }) {
  return (
    <StyledNav>
      <MainCategory>
        <StyledMainBtn className={searchType === 1 ? 'active' : ''} onClick={() => handleSearchType(1)}>
          부위별
        </StyledMainBtn>
        <StyledBar>|</StyledBar>
        <StyledMainBtn className={searchType === 2 ? 'active' : ''} onClick={() => handleSearchType(2)}>
          자세별
        </StyledMainBtn>
        <StyledBar>|</StyledBar>
        <StyledMainBtn className={searchType === 3 ? 'active' : ''} onClick={() => handleSearchType(3)}>
          효과별
        </StyledMainBtn>
      </MainCategory>
      {searchType === 1 ? (
        <CurrentCategory>
          <StyledCurBtn
            onClick={() => {
              handleMain('');
              handleSub('');
            }}
          >
            전체
          </StyledCurBtn>
          {main ? (
            <>
              <StyledArrow>·</StyledArrow>
              <StyledCurBtn
                onClick={() => {
                  handleMain(main);
                  handleSub('');
                }}
              >
                {mainBodyArr[main - 1]}
              </StyledCurBtn>
            </>
          ) : (
            ''
          )}
          {sub ? (
            <>
              <StyledArrow>·</StyledArrow>
              <StyledCurBtn>{subBodyEnum[sub]}</StyledCurBtn>
            </>
          ) : (
            ''
          )}
        </CurrentCategory>
      ) : (
        ''
      )}
      <SubCategory>
        {searchType === 1
          ? main
            ? subBodyArr[main - 1].map(([string, number], i) => (
                <StyledSubBtn className={sub - 1 === i ? 'active' : ''} onClick={() => handleSub(number)}>
                  {string}
                </StyledSubBtn>
              ))
            : mainBodyArr.map((mainBody, i) => (
                <StyledSubBtn onClick={() => handleMain(i + 1)}>{mainBody}</StyledSubBtn>
              ))
          : searchType === 2
          ? postureArr.map((posture, i) => (
              <StyledSubBtn className={main - 1 === i ? 'active' : ''} onClick={() => handleMain(i + 1)}>
                {posture}
              </StyledSubBtn>
            ))
          : effectArr.map((effect, i) => (
              <StyledSubBtn className={main - 1 === i ? 'active' : ''} onClick={() => handleMain(i + 1)}>
                {effect}
              </StyledSubBtn>
            ))}
      </SubCategory>
      <StyledTagBtn onClick={handleTagModal}>태그별 찾기</StyledTagBtn>
    </StyledNav>
  );
}

StretchingMenu.propTypes = {
  handleTagModal: PropTypes.func.isRequired,
  searchType: PropTypes.number.isRequired,
  handleSearchType: PropTypes.func.isRequired,
  main: PropTypes.number.isRequired,
  handleMain: PropTypes.func.isRequired,
  sub: PropTypes.number.isRequired,
  handleSub: PropTypes.func.isRequired,
};

export default StretchingMenu;

const StyledNav = styled.nav`
  width: 100%;
  padding: 2rem 5rem 0 5rem;
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

  &.active {
    color: ${({ theme }) => theme.darkPurple};
    font-weight: 700;
  }

  & + & {
    margin-left: 1rem;
  }
`;

const StyledBar = styled.span`
  font-size: 18px;
  margin: 1rem;
`;

const CurrentCategory = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-top: 1rem;
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
  margin-top: 1rem;
  @media screen and (max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const StyledSubBtn = styled.button`
  font-size: 18px;
  width: auto;
  height: 40px;
  padding: 0 20px;
  border-radius: 20px;

  & + & {
    margin-left: 12px;

    @media screen and (max-width: 600px) {
      margin : 0 0 10px 10px;
    }
  }

  background-color: ${({ theme }) => theme.lightPurple};
  color: #ffffff;
  &.active {
    background-color: ${({ theme }) => theme.darkPurple};
  }
`;

const StyledTagBtn = styled.button`
  font-size: 16px;
  background-color: #adadad;
  color: #ffffff;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  position: absolute;
  top: 2rem;
  right: 5rem;

  @media screen and (max-width: 770px) {
    position: relative;
    top: 0;
    right: 0;
    margin-top: 1rem;
  }
`;
