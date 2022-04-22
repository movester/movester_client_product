import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StretchingItem from '../../elements/StretchingItem';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../../util/stretchingEnum';

function StretchingRecommend({ recommendStretchings }) {
  return (
    <RecommendWrap>
      <Title>이 스트레칭이 마음에 들었다면</Title>
      <StretchingContainer>
        {recommendStretchings.map(stretching => {
          const { stretchingIdx, title, mainBody, subBody, effect, posture, image, like } = stretching;
          return (
            <StretchingItem
              idx={stretchingIdx}
              title={title}
              category={`${mainBodyEnum[mainBody]} - ${subBodyEnum[subBody]}`}
              posture={posture ? posture.map(v => postureEnum[v]).join(' · ') : '-'}
              effect={effect ? effect.map(v => effectEnum[v]).join(' · ') : '-'}
              image={image}
              like={like}
            />
          );
        })}
      </StretchingContainer>
    </RecommendWrap>
  );
}

StretchingRecommend.propTypes = {
  recommendStretchings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StretchingRecommend;

const Title = styled.p`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 14px;
`;

const RecommendWrap = styled.section`
  height: auto;
  background-color: ${({ theme }) => theme.lightGray};
  padding: 2rem 15%;

  @media screen and (max-width: 600px) {
    padding: 2rem 1rem;
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
