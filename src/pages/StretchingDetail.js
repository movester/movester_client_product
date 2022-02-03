import React from 'react';
import styled from 'styled-components';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Main from '../components/common/Main';
import StretchingItem from '../components/elements/StretchingItem';

const STRETCHING_DATA = {
  title: '팔 접어 어깨 스트레칭',
  category: '상체 > 팔/어께',
  posture: '서서, 앉아서',
  effect: ['라운드숄더', '거북목'],
  score: 5.0,
  scoreCnt: 510,
  youtube: 'https://www.youtube.com/watch?v=thj1vU19HF0',
};

const STRETCHING_LIST = [
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
  { title: '팔 접어 어깨 스트레칭', category: '상체 > 팔/어께', posture: '서서, 앉아서', effect: '라운드숄더 거북목' },
];

function StretchingDetail() {
  return (
    <Main>
      <OutLine>
        <ImageWrap>
          <StyledImg src="/assets/stretching-detail.png" alt="스트레칭 대표 이미지" />
          <LikeButton />
        </ImageWrap>
        <DetailWrap>
          <Title>{STRETCHING_DATA.title}</Title>
          <Category>{STRETCHING_DATA.category}</Category>
          <Posture>{STRETCHING_DATA.posture}</Posture>
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
            ({STRETCHING_DATA.score})({STRETCHING_DATA.scoreCnt}명 참여)
          </StarWrap>
          <EffectWrap>
            {STRETCHING_DATA.effect.map(effect => (
              <EffectTag>{effect}</EffectTag>
            ))}
          </EffectWrap>
          <YoutubeWrap>
            <StyledYouTubeIcon />
            {STRETCHING_DATA.youtube}
          </YoutubeWrap>
          <KaKaoBtn>카카오톡 공유하기</KaKaoBtn>
        </DetailWrap>
      </OutLine>
      <Content>
        이 곳은 내용입니다.
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
          {STRETCHING_LIST.map(stretching => (
            <StretchingItem
              title={stretching.title}
              category={stretching.category}
              posture={stretching.posture}
              effect={stretching.effect}
            />
          ))}
        </StretchingContainer>
      </RecommendWrap>
    </Main>
  );
}

export default StretchingDetail;

const OutLine = styled.section`
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.lightPurple};
  display: flex;
  gap: 1rem;
  padding: 1rem 15%;
  color: #ffffff;
`;

const ImageWrap = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  border: 1px solid gray;
  width: 250px;
  height: 250px;
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

const DetailWrap = styled.div`
  padding-top: 0.7rem;
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
`;

const RecommendWrap = styled.section`
  height: auto;
  background-color: ${({ theme }) => theme.lightGray};
  padding: 2rem 15%;
`;

const StretchingContainer = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5rem;
  justify-content: center;
`;

