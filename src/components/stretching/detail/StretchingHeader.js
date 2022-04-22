import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YouTubeIcon from '@material-ui/icons/YouTube';
import StarIcon from '@material-ui/icons/Star';
import axios from '../../../services/defaultClient';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../../util/stretchingEnum';

function StretchingHeader({ stretching, isAuth }) {
  const likeBtn = useRef(null);
  const handleLike = async e => {
    try {
      e.stopPropagation();
      const isActive = likeBtn.current.classList.contains('active');
      likeBtn.current.classList.toggle('active');
      if (isActive) {
        await axios.delete(`likes/${stretching.stretchingIdx}`);
      } else {
        await axios.post('likes/', {
          stretchingIdx: stretching.stretchingIdx,
        });
      }
    } catch (err) {
      alert('에러 발생');
    }
  };
  return (
    <OutLine>
      <ImageWrap>
        <StyledImg
          src={`https://movester-bucket.s3.ap-northeast-2.amazonaws.com/${stretching.image}.png`}
          alt="대표 이미지"
        />
        {isAuth ? <LikeButton ref={likeBtn} onClick={handleLike} className={stretching.like ? 'active' : ''} /> : ''}
      </ImageWrap>
      <DetailWrap>
        <Title>{stretching.title}</Title>
        <EffectWrap>
          {stretching.effect.map(effect => (
            <EffectTag>{effectEnum[effect]}</EffectTag>
          ))}
        </EffectWrap>
        <Category>{`${mainBodyEnum[stretching.mainBody]} - ${subBodyEnum[stretching.subBody]}`}</Category>
        <Posture>{stretching.posture ? stretching.posture.map(v => postureEnum[v]).join(' · ') : '-'}</Posture>
        <StarWrap>
          {[0, 0, 0, 0, 0]
            .map((_, index) => (stretching.difficulty >= index + 1 ? 1 : 0))
            .map(active => (
              <StyledStarIcon className={active ? 'active' : ''} />
            ))}
        </StarWrap>
        <YoutubeWrap>
          <StyledYouTubeIcon />
          {stretching.youtube || '-'}
        </YoutubeWrap>
        {/* <KaKaoBtn>카카오톡 공유하기</KaKaoBtn> */}
      </DetailWrap>
    </OutLine>
  );
}

StretchingHeader.propTypes = {
  stretching: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ])
  ).isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default StretchingHeader;

const OutLine = styled.section`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.lightPurple};
  display: flex;
  gap: 1rem;
  padding: 1rem 15%;
  color: #ffffff;

  @media screen and (max-width: 700px) {
    flex-flow: column;
    align-items: start;
    padding: 1rem 1rem;
  }
`;

const ImageWrap = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  width: 17rem;
  height: 17rem;
  border-radius: 15px;

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
  }
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

const DetailWrap = styled.div`
  padding-top: 0.7rem;
  width: 100%;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 14px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Category = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Posture = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const StarWrap = styled.div`
  display: inline;
  font-size: 16px;
  height: auto;

  @media screen and (max-width: 870px) {
    display: block;
  }
`;

const StyledStarIcon = styled(StarIcon)`
  color: #ccc;

  &.active {
    color: #fc0;
  }
`;

const EffectWrap = styled.div`
  margin: 18px 0 81px 0;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 10px;
    margin: 30px 0;
    height: auto;
  }
`;

const EffectTag = styled.div`
  display: inline;
  font-size: 16px;
  width: auto;
  height: 16px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.lightPurple};
  border: 1px solid #ffffff;
  border-radius: 20px;

  & + & {
    margin-left: 10px;
  }

  @media (max-width: 600px) {
    height: auto;
    & + & {
      margin-left: 0;
    }
    text-align: center;
  }
`;

const YoutubeWrap = styled.div`
  font-size: 16px;
  display: flex;
  line-height: 24px;
  margin: 5px 0 10px 0;
`;

const StyledYouTubeIcon = styled(YouTubeIcon)`
  margin: 0 5px 0 0;
  @media (max-width: 600px) {
    transform: translateY(2px);
  }
`;

