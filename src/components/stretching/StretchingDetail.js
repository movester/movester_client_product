import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YouTubeIcon from '@material-ui/icons/YouTube';
import StarIcon from '@material-ui/icons/Star';
import ReactStars from 'react-rating-stars-component';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../util/stretchingEnum';

function StretchingDetail({ stretching, isAuth, handleDifficulty, userDifficulty, handleLike }) {
  return (
    <>
      <OutLine>
        <ImageWrap>
          <StyledImg
            src={`https://movester-bucket.s3.ap-northeast-2.amazonaws.com/${stretching.image}.png`}
            alt="대표 이미지"
          />
          {isAuth ? (
            <LikeButton
              onClick={e => {
                e.stopPropagation();
                handleLike(stretching.stretchingIdx, stretching.like);
              }}
              className={stretching.like ? 'active' : ''}
            />
          ) : (
            ''
          )}
        </ImageWrap>
        <DetailWrap>
          <Title>{stretching.title}</Title>
          <Category>{`${mainBodyEnum[stretching.mainBody]} - ${subBodyEnum[stretching.subBody]}`}</Category>
          <Posture>{stretching.posture ? stretching.posture.map(v => postureEnum[v]).join(' · ') : '-'}</Posture>
          <StarWrap>
            {[0, 0, 0, 0, 0]
              .map((_, index) => (stretching.difficulty >= index + 1 ? 1 : 0))
              .map(active => (
                <StyledStarIcon className={active ? 'active' : ''} />
              ))}
          </StarWrap>
          <EffectWrap>
            {stretching.effect.map(effect => (
              <EffectTag>{effectEnum[effect]}</EffectTag>
            ))}
          </EffectWrap>
          <YoutubeWrap>
            <StyledYouTubeIcon />
            {stretching.youtube || '-'}
          </YoutubeWrap>
          <KaKaoBtn>카카오톡 공유하기</KaKaoBtn>
        </DetailWrap>
      </OutLine>
      <Content>
        <StyledPre dangerouslySetInnerHTML={{ __html: stretching.contents }} />
        {isAuth ? (
          <ScoreResearch>
            <p>뭅스터와 함께 스트레칭을 따라해보셨나요?</p>
            <p>조나현님께서 느낀 스트레칭의 강도를 표시해주세요!</p>
            <ReactStars
              count={5}
              onChange={handleDifficulty}
              size={24}
              emptyIcon={<i className="far fa-star" />}
              fullIcon={<i className="fa fa-star" />}
              value={userDifficulty}
              activeColor="#fc0"
            />
          </ScoreResearch>
        ) : (
          ''
        )}
      </Content>
    </>
  );
}

StretchingDetail.propTypes = {
  stretching: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    ])
  ).isRequired,
  isAuth: PropTypes.bool.isRequired,
  handleDifficulty: PropTypes.func.isRequired,
  userDifficulty: PropTypes.number.isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default StretchingDetail;

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
    padding: 1rem 4rem;
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
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 14px;
`;

const Category = styled.p`
  font-size: 16px;
  margin-bottom: 14px;
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
  margin: 18px 0 20px 0;
`;

const EffectTag = styled.div`
  display: inline;
  font-size: 16px;
  width: auto;
  height: 16px;
  padding: 5px;
  background: ${({ theme }) => theme.lightPurple};
  border: 2px solid ${({ theme }) => theme.darkPurple};
  border-radius: 5px;

  & + & {
    margin-left: 1rem;
  }
`;

const YoutubeWrap = styled.div`
  font-size: 16px;
  display: flex;
  line-height: 24px;
  margin-bottom: 10px;
`;

const StyledYouTubeIcon = styled(YouTubeIcon)`
  margin-right: 5px;
`;

const KaKaoBtn = styled.button`
  width: auto;
  height: 24px;
  padding: 5px 10px;
  background: #f7e600;
  border-radius: 10px;
`;

const Content = styled.section`
  height: auto;
  padding: 3rem 15%;

  @media screen and (max-width: 600px) {
    padding: 3rem;
  }
`;

const StyledPre = styled.pre`
  padding: 10px;
  min-height: 40px;
`;

const ScoreResearch = styled.section`
  background: ${({ theme }) => theme.lightGray};
  border-radius: 30px;
  height: auto;
  margin-top: 2rem;
  padding: 2rem;

  p {
    margin-bottom: 15px;
  }
`;

