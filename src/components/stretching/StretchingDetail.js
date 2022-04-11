import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YouTubeIcon from '@material-ui/icons/YouTube';
import StretchingItem from '../elements/StretchingItem';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../util/stretchingEnum';

function StretchingDetail({ stretching, recommendStretchings, isAuth }) {
  return (
    <>
      <OutLine>
        <ImageWrap>
          <StyledImg
            src={`https://movester-bucket.s3.ap-northeast-2.amazonaws.com/${stretching.image}.png`}
            alt="대표 이미지"
          />
          {isAuth ? <LikeButton /> : ""}
        </ImageWrap>
        <DetailWrap>
          <Title>{stretching.title}</Title>
          <Category>{`${mainBodyEnum[stretching.mainBody]} - ${subBodyEnum[stretching.subBody]}`}</Category>
          <Posture>{stretching.posture ? stretching.posture.map(v => postureEnum[v]).join(' · ') : '-'}</Posture>
          <StarWrap>
            <Star>
              <input type="radio" id="5-star" name="rating" value="5" disabled />
              <label htmlFor="5-star">&#9733;</label>
              <input type="radio" id="4-star" name="rating" value="4" disabled />
              <label htmlFor="4-star">&#9733;</label>
              <input type="radio" id="3-star" name="rating" value="3" disabled />
              <label htmlFor="3-star">&#9733;</label>
              <input type="radio" id="2-star" name="rating" value="2" disabled />
              <label htmlFor="2-star">&#9733;</label>
              <input type="radio" id="1-star" name="rating" value="1" disabled />
              <label htmlFor="1-star">&#9733;</label>
            </Star>
            {stretching.difficulty}
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
        <ScoreResearch>
          <p>뭅스터와 함께 스트레칭을 따라해보셨나요?</p>
          <span>조나현님께서 느낀 스트레칭의 강도를 표시해주세요!</span>
          <StarWrap>
            <Star>
              <input type="radio" id="5-star" name="rating" value="5" disabled />
              <label htmlFor="5-star">&#9733;</label>
              <input type="radio" id="4-star" name="rating" value="4" disabled />
              <label htmlFor="4-star">&#9733;</label>
              <input type="radio" id="3-star" name="rating" value="3" disabled />
              <label htmlFor="3-star">&#9733;</label>
              <input type="radio" id="2-star" name="rating" value="2" disabled />
              <label htmlFor="2-star">&#9733;</label>
              <input type="radio" id="1-star" name="rating" value="1" disabled />
              <label htmlFor="1-star">&#9733;</label>
            </Star>
          </StarWrap>
          <SubmitBtn>제출</SubmitBtn>
        </ScoreResearch>
      </Content>
      <RecommendWrap>
        <Title>이 스트레칭이 마음에 들었다면</Title>
        <StretchingContainer>
          {recommendStretchings.map(stretching => {
            const { stretchingIdx, title, mainBody, subBody, effect, posture, image } = stretching;
            return (
              <Link key={stretchingIdx} to={`/stretching/detail/${stretchingIdx}`}>
                <StretchingItem
                  title={title}
                  category={`${mainBodyEnum[mainBody]} - ${subBodyEnum[subBody]}`}
                  posture={posture ? posture.map(v => postureEnum[v]).join(' · ') : '-'}
                  effect={effect ? effect.map(v => effectEnum[v]).join(' · ') : '-'}
                  image={image}
                />
              </Link>
            );
          })}
        </StretchingContainer>
      </RecommendWrap>
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
  recommendStretchings: PropTypes.arrayOf(PropTypes.object).isRequired,
  isAuth: PropTypes.bool.isRequired,
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

  @media screen and (max-width: 870px) {
    display: block;
  }
`;

const Star = styled.div`
  margin: 0 5px 10px 0;
  display: inline-flex;
  flex-direction: row-reverse;
  font-size: 20px;
  input {
    display: none;
  }

  label {
    color: #ccc;
  }

  &:checked ~ label {
    color: #fc0;
  }

  label:hover,
  label:hover ~ label {
    color: #fc0;
    cursor: pointer;
  }
`;

const EffectWrap = styled.div`
  margin: 10px 0 20px 0;
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
    margin-bottom: 10px;
  }

  span {
    margin-right: 10px;

    @media screen and (max-width: 870px) {
      display: block;
      margin-bottom: 10px;
    }
  }
`;

const SubmitBtn = styled.button`
  font-size: 16px;
  font-weight: 800;
  color: #ffffff;
  width: 100px;
  height: 30px;
  background: ${({ theme }) => theme.lightPurple};
  border-radius: 10px;
  float: right;

  @media screen and (max-width: 870px) {
    float: none;
  }
`;

const RecommendWrap = styled.section`
  height: auto;
  background-color: ${({ theme }) => theme.lightGray};
  padding: 2rem 15%;

  @media screen and (max-width: 600px) {
    padding: 2rem 3rem;
  }
`;

const StretchingContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5rem;
  justify-content: center;

  @media screen and (max-width: 1340px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 3rem;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
