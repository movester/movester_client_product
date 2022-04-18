import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ModalPortal from './ModalPortal';
import { tagArr, tagSet } from '../../../util/stretchingEnum';

function StretchingTagModal({ onClose, handleTagSearch, onTagChange }) {
  const [category, setCategory] = useState(0);
  const handleCategory = type => {
    setCategory(() => type);
  };
  const [selected, setSelected] = useState([]);
  const insertSelected = value => {
    if (!selected.includes(value) && selected.length < 8) {
      setSelected(prev => [...prev, value]);
    }
  };
  const deleteSelected = value => {
    setSelected(prev => prev.filter(v => v !== value));
  };

  const onSubmit = () => {
    if (selected.length && selected.length <= 8) {
      selected.forEach(select => {
        const category = tagSet[select].type;
        const { value } = tagSet[select];
        onTagChange(category, value);
      });
      onClose();
      handleTagSearch(() => true);
    }
  };

  // const categorySet = {
  //   1: 'mainBody',
  //   2: 'subBody',
  //   3: 'subBody',
  //   4: 'subBody',
  //   5: 'posture',
  //   6: 'effect',
  //   7: 'tool',
  // };
  return (
    <ModalPortal>
      <Container>
        <Content>
          <CloseBtn onClick={onClose}>X</CloseBtn>
          <Title>태그 맞춤 동작 찾기</Title>
          <p>카테고리별 태그를 선택하여</p>
          <p>나에게 꼭 맞는 스트레칭을 찾아보세요!</p>
          <Wrap>
            <p>1. 카테고리 선택</p>
            <CategoryWrap>
              <TagBtn className='gray' onClick={() => handleCategory(0)}>전신</TagBtn>
              <TagBtn className='gray' onClick={() => handleCategory(1)}>상체</TagBtn>
              <TagBtn className='gray' onClick={() => handleCategory(2)}>코어</TagBtn>
              <TagBtn className='gray' onClick={() => handleCategory(3)}>하체</TagBtn>
              <TagBtn className='gray' onClick={() => handleCategory(4)}>자세</TagBtn>
              <TagBtn className='gray' onClick={() => handleCategory(5)}>효과</TagBtn>
              <TagBtn className='gray' onClick={() => handleCategory(6)}>도구</TagBtn>
            </CategoryWrap>
            <p>2. 태그 선택</p>
            <TagWrap>
              {tagArr[category].map(tag => (
                <TagBtn onClick={() => insertSelected(tag)}>{tag}</TagBtn>
              ))}
            </TagWrap>
            <p>3. 선택한 태그</p>
            <span>해당 태그에 만족하는 스트레칭이 노출됩니다.(최대 8개 선택 가능)</span>
            <SelectedWrap>
              {selected.map(select => (
                <SelectedTagBtn>
                  {select}
                  <button type="button" onClick={() => deleteSelected(select)}>
                    X
                  </button>
                </SelectedTagBtn>
              ))}
            </SelectedWrap>
          </Wrap>
          <StyledButton type="button" onClick={onSubmit}>
            확인
          </StyledButton>
        </Content>
      </Container>
    </ModalPortal>
  );
}

StretchingTagModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  handleTagSearch: PropTypes.func.isRequired,
  onTagChange: PropTypes.func.isRequired,
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
  z-index: 1000;
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

const CloseBtn = styled.button`
  float: right;
  font-size: 20px;
  font-weight: 700;
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
  background: ${({ theme }) => theme.lightPurple};
  border-radius: 10px;
  color: #ffffff;

  &.gray {
    background: #ADADAD
  }
`;

const TagWrap = styled.div`
  border: 2px solid ${({ theme }) => theme.darkGray};
  margin: 15px 0 20px 0;
  padding: 8px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 10px;
`;

const SelectedWrap = styled.div`
  background: ${({ theme }) => theme.lightGray};
  margin-top: 15px;
  padding: 8px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
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
  font-size: 14px;
  font-weight: 800;
  line-height: 16px;

  button {
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
