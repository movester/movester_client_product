import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StretchingItem from '../elements/StretchingItem';
import NoContent from '../elements/NoContent';
import { mainBodyEnum, subBodyEnum, postureEnum, effectEnum } from '../../util/stretchingEnum';

function StretchingList({ stretchings, handleLike, setPage }) {
  const pageEnd = useRef();
  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      },
      { threshold: 1 }
    );
    observer.observe(pageEnd.current);
  }, []);

  return stretchings.length ? (
    <StretchingContainer>
      {stretchings.map((stretching, idx) => {
        const { stretchingIdx, title, mainBody, subBody, effect, posture, image, like } = stretching;
        return (
          <div key={idx} ref={stretchings.length - 1 === idx ? pageEnd : undefined}>
            <StretchingItem
              idx={stretchingIdx}
              title={title}
              category={`${mainBodyEnum[mainBody]} - ${subBodyEnum[subBody]}`}
              posture={posture ? posture.map(v => postureEnum[v]).join(' · ') : '-'}
              effect={effect ? effect.map(v => effectEnum[v]).join(' · ') : '-'}
              image={image}
              active={like}
              handleLike={handleLike}
            />
          </div>
        );
      })}
    </StretchingContainer>
  ) : (
    <NoContent />
  );
}

StretchingList.propTypes = {
  stretchings: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleLike: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default StretchingList;

const StretchingContainer = styled.section`
  height: auto;
  padding: 2rem 5rem;
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
