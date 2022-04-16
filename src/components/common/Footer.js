import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <LeftRightContainer>
        <FooterLeftBlock>
          <img src="/assets/logo.png" alt="뭅스터 로고" />
          <div className="footer-top">
            |&nbsp;&nbsp;<span>개인 정보 취급 방침</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span>이용 약관</span>&nbsp;&nbsp;|
            &nbsp;&nbsp;
            <span>고객 센터</span>
          </div>
          <div className="footer-middle">
            <span>대표자: 표정연&nbsp;&nbsp;|</span>&nbsp;&nbsp;<span>사업자번호: 000-000000-0000&nbsp;&nbsp;|</span>
            &nbsp;&nbsp;<span>주소: 인천광역시 어쩌구 저쩌구&nbsp;&nbsp;|</span>&nbsp;&nbsp;
            <span>이메일: jnhro1@gmail.com&nbsp;&nbsp;|</span>
          </div>
        </FooterLeftBlock>
        <FooterRightBlock>
          <img src="/assets/naver_logo.png" alt="네이버 블로그 링크" />
          <img src="/assets/youtube_logo.png" alt="유튜브 링크" />
          <img src="/assets/insta_logo.png" alt="인스타그램 링크" />
          <img src="/assets/kakao_logo.png" alt="카카오 오픈채팅방 링크" />
        </FooterRightBlock>
      </LeftRightContainer>
      <div className="footer-bottom">
        <p>©️MOVESTER. ALL RIGHTS RESERVED</p>
      </div>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4rem 5rem;
  color: #2a1598;
  background: #fff;

  @media (max-width: 600px) {
    padding: 4rem 3rem;
  }
`;

const FooterLeftBlock = styled.div`
  img {
    width: 100px;
    margin-right: 10px;
  }

  .footer-top {
    display: inline-block;
    margin-bottom: 1.5rem;
    font-size: 1rem;

    span + span {
      cursor: pointer;
    }
  }
  .footer-middle,
  .footer-bottom {
    font-size: 0.8rem;
  }

  @media (max-width: 600px) {
    .footer-top {
      font-size: 0.8rem;
    }

    .footer-middle,
    .footer-bottom {
      font-size: 0.5rem;
      margin-bottom: 10px;
    }
  }
`;

const FooterRightBlock = styled.div`
  display: flex;
  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    align-items: flex-start;
  }
`;

const LeftRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  @media (max-width: 600px) {
    flex-direction: column;
    margin: 1rem 0;
  }
`;
