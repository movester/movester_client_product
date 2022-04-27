import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function LikeStretchingItem({ idx, title, category, posture, effect, image, active, handleLike }) {
  const user = useSelector(state => state.auth.isAuth);
  return (
    <Item>
      <ImageWrap>
        <Link key={idx} to={`/stretching/detail/${idx}`}>
          <StyledImg src={`${process.env.REACT_APP_S3_URL}/${image}.png`} alt="대표 이미지" />
        </Link>
        {user && (
          <LikeButton
            onClick={e => {
              e.stopPropagation();
              handleLike(idx, active);
            }}
            className={active ? 'active' : ''}
          />
        )}
      </ImageWrap>
      <Link key={idx} to={`/stretching/detail/${idx}`}>
        <Title>{title}</Title>
      </Link>
      <Category>{category}</Category>
      <Posture>{posture}</Posture>
      <Effect>{effect}</Effect>
    </Item>
  );
}

LikeStretchingItem.propTypes = {
  idx: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  posture: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  active: PropTypes.number,
  handleLike: PropTypes.func,
};

LikeStretchingItem.defaultProps = {
  active: 0,
  handleLike: () => {},
};

export default LikeStretchingItem;

const Item = styled.div`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const ImageWrap = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
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
  &:hover {
    background: ${({ theme }) => theme.darkPurple};
    &:before,
    &:after {
      background: ${({ theme }) => theme.darkPurple};
    }
  }
  &.active {
    background: ${({ theme }) => theme.darkPurple};
    &:before,
    &:after {
      background: ${({ theme }) => theme.darkPurple};
    }
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
