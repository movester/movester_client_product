import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import begImage from '../../../assets/pwChange.png';

function LinkModal({ title, content, link, onClose }) {
  return (
    <Container>
      <Content>
        <Link to={link}>
          <button type="button" onClick={onClose}>
            x
          </button>
        </Link>
        <Title>{title}</Title>
        <p>{content}</p>
        <Image src={begImage} alt="이미지" />
      </Content>
    </Container>
  );
}

export default LinkModal;

LinkModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

LinkModal.defaultProps = {
  title: '',
  content: '',
};

const Container = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Content = styled.div`
  position: relative;
  background: #ffffff;
  padding: 20px;
  width: 400px;
  height: auto;
  border-radius: 12px;
  text-align: center;
  button {
    position: absolute;
    top: 11px;
    right: 27px;
    font-size: 29px;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  margin: 20px 0 10px 0;
`;
