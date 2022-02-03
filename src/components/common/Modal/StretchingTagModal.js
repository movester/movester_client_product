import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';

function StretchingTagModal({ onClose }) {
  return (
    <ModalPortal>
      <Container>
        <Content>
          <Title>태그 맞춤 동작 찾기</Title>
          <p>카테고리별 태그를 선택하여</p>
          <p>나에게 꼭 맞는 스트레칭을 찾아보세요!</p>
          <Wrap>
            <p>1. 카테고리 선택</p>
            <CategoryWrap>
              <TagBtn>전신</TagBtn>
              <TagBtn>상체</TagBtn>
              <TagBtn>하체</TagBtn>
              <TagBtn>코어</TagBtn>
              <TagBtn>자세</TagBtn>
              <TagBtn>효과</TagBtn>
              <TagBtn>도구</TagBtn>
            </CategoryWrap>
            <p>2. 태그 선택</p>
            <TagWrap>
              <TagBtn>무릎/다리</TagBtn>
              <TagBtn>발목/발</TagBtn>
            </TagWrap>
            <p>3. 선택한 태그</p>
            <span>해당 태그를 모두 만족하는 스트레칭이 노출됩니다.(최대 5개 선택 가능)</span>
            <SelectedWrap>
              <SelectedTagBtn>
                무릎/다리<span>X</span>
              </SelectedTagBtn>
              <SelectedTagBtn>
                폼롤러<span>X</span>
              </SelectedTagBtn>
              <SelectedTagBtn>
                누워서
                <span>X</span>
              </SelectedTagBtn>
              <SelectedTagBtn>
                서서
                <span>X</span>
              </SelectedTagBtn>
              <SelectedTagBtn>
                거북목
                <span>X</span>
              </SelectedTagBtn>
            </SelectedWrap>
          </Wrap>
          <StyledButton type="button" onClick={onClose}>
            확인
          </StyledButton>
        </Content>
      </Container>
    </ModalPortal>
  );
}

StretchingTagModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default StretchingTagModal;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background: #ffffff;
  padding: 20px;
  width: 400px;
  height: auto;
  border-radius: 12px;
  text-align: center;

  p {
    margin-bottom: 5px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Wrap = styled.div`
  font-size: 16px;
  margin: 20px 0;
  text-align: left;

  span {
    font-size: 12px;
    padding-left: 8px;
  }
`;

const CategoryWrap = styled.div`
  padding: 15px 0 20px 0;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 10px;
`;

const TagBtn = styled.button`
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  background: #f1d0bd;
  border-radius: 10px;

  &:nth-child(1) {
    background-color: #D6B4B4;
  }

  &:nth-child(2) {
    background-color: #FEB580;
  }

  &:nth-child(3) {
    background-color: #F0C36A;
  }

  &:nth-child(4) {
    background-color: #BFD0A2;
  }

  &:nth-child(5) {
    background-color: #97BFB8;
  }

  &:nth-child(6) {
    background-color: #9A97BF;
  }

  &:nth-child(7) {
    background-color: #BF97BE;
  }

`;

const TagWrap = styled.div`
  border: 2px solid ${({ theme }) => theme.darkGray};
  margin: 15px 0 20px 0;
  padding: 8px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 10px;
`;

const SelectedWrap = styled.div`
  background: ${({ theme }) => theme.lightGray};
  margin-top: 15px;
  padding: 8px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 20px;
`;

const SelectedTagBtn = styled.button`
  width: 100%;
  height: 30px;
  padding: 5px 10px;
  background: #ffffff;
  border: 2px solid ${({ theme }) => theme.darkPurple};
  border-radius: 10px;
  color: ${({ theme }) => theme.darkPurple};
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;

  span {
    float: right;
  }
`;

const StyledButton = styled.button`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: ${({ theme }) => theme.lightPurple};
  border-radius: 10px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 800;
  text-align: center;
  cursor: pointer;
  border: none;
`;
