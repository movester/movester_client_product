import React from 'react';
import styled from 'styled-components';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Main from '../components/common/Main';

const STRETCHING_DATA = {
  title: '팔 접어 어깨 스트레칭',
  category: '상체 > 팔/어께',
  posture: '서서, 앉아서',
  effect: ['라운드숄더', '거북목'],
  score: 5.0,
  scoreCnt: 510,
  youtube: 'https://www.youtube.com/watch?v=thj1vU19HF0',
};
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
    </Main>
  );
}

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
  font-size: 16px;
  margin-bottom: 10px;
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
  }
`;

const EffectWrap = styled.div`
  margin-bottom: 20px;
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
  padding: 5px;
  background: #F7E600;
  border-radius: 10px;

`;

export default StretchingDetail;
