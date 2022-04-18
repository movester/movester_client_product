import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MoveLink from '../common/MoveLink';
import LikeStretchingItem from './LikeStretchingItem';
import Pagination from '../elements/Pagination';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../util/stretchingEnum';

function Like({ likeStretchings, handleLike, total, page, setPage }) {
  const offset = (page - 1) * 12;
  return (
    <StyledWrap>
      {likeStretchings.length ? (
        <>
          <StretchingContainer>
            {likeStretchings.slice(offset, offset + 12).map(stretching => {
              const { stretchingIdx, title, mainBody, subBody, effects, postures, image } = stretching;
              return (
                <LikeStretchingItem
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
          <Pagination total={total} page={page} setPage={setPage} />
        </>
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
  page: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
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
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 2rem;
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
