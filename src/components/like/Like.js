import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoveLink from '../common/MoveLink';
import StretchingItem from '../elements/StretchingItem';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../util/stretchingEnum';

function Like({ likeStretchings, handleLike }) {
  return (
    <StyledWrap>
      {likeStretchings.length ? (
        <StretchingContainer>
          {likeStretchings.map(stretching => {
            const { stretchingIdx, title, mainBody, subBody, effects, postures, image } = stretching;
            return (
              <StretchingItem
                idx={stretchingIdx}
                title={title}
                category={`${mainBodyEnum[mainBody]} - ${subBodyEnum[subBody]}`}
                posture={postures ? postures.map(v => postureEnum[v]).join(' · ') : '-'}
                effect={effects ? effects.map(v => effectEnum[v]).join(' · ') : '-'}
                image={image}
                active="1"
                handleLike={handleLike}
              />
            );
          })}
        </StretchingContainer>
      ) : (
        <div className="not-Like">
          <img src="/assets/sorry.png" alt="스트레칭 없음" />
          <p className="tall-text">찜한 스트레칭이 없습니다!</p>
          <MoveLink text="아직 찜한 스트레칭이 없으신가요?" btnText="스트레칭 보러가기" address="/stretching" />
        </div>
      )}
    </StyledWrap>
  );
}

Like.propTypes = {
  likeStretchings: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleLike: PropTypes.func.isRequired,
};

export default Like;

const StyledWrap = styled.section`
  width: 100%;

  .not-Like {
    margin-top: 50px;
    text-align: center;
    .tall-text {
      font-size: 18px;
    }
    p {
      margin-top: 20px;
    }
  }
`;

const StretchingContainer = styled.section`
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 5rem;
  justify-content: center;

  @media screen and (max-width: 1340px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 600px) {
    padding: 1rem 3rem;
  }
`;
