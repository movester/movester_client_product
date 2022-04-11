import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function StretchingItem({ title, category, posture, effect, image }) {
  const user = useSelector(state => state.auth.isAuth);
  return (
    <Item>
      <ImageWrap>
        <StyledImg src={`https://movester-bucket.s3.ap-northeast-2.amazonaws.com/${image}.png`} alt="대표 이미지" />
        {user ? <LikeButton /> : ''}
      </ImageWrap>
      <Title>{title}</Title>
      <Category>{category}</Category>
      <Posture>{posture}</Posture>
      <Effect>{effect}</Effect>
    </Item>
  );
}

StretchingItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  posture: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default StretchingItem;

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

// 참고
// const StretchingContainer = styled.section`
//   height: auto;
//   padding: 2rem 5rem;
//   display: grid;
//   grid-template-rows: repeat(3, 1fr);
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2rem 5rem;
//   justify-content: center;
// `;
