import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
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
        <div className="footer-bottom">
          <p>©️MOVESTER. ALL RIGHTS RESERVED</p>
        </div>
      </FooterLeftBlock>
      <FooterRightBlock>
        <img src="/assets/naver_logo.png" alt="네이버 블로그 링크" />
        <img src="/assets/youtube_logo.png" alt="유튜브 링크" />
        <img src="/assets/insta_logo.png" alt="인스타그램 링크" />
        <img src="/assets/kakao_logo.png" alt="카카오 오픈채팅방 링크" />
      </FooterRightBlock>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 8rem;
  border-top: 2px solid #2a1598;
  color: #2a1598;
  background: #fff;

  @media (max-width: 1150px) {
    flex-direction: column;
    padding: 1rem;
  }

  @media (max-width: 535px) {
    align-items: flex-start;
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

  .footer-middle {
    margin-bottom: 10px;
  }

  .footer-middle,
  .footer-bottom {
    font-size: 0.8rem;
  }

  @media (max-width: 650px) {
    .footer-top {
      font-size: 0.8rem;
    }

    .footer-middle,
    .footer-bottom {
      font-size: 0.5rem;
      margin-bottom: 10px;
    }

    .footer-middle span {
      display: block;
    }
  }
`;

const FooterRightBlock = styled.div`
  img {
    width: 50px;
    height: 50px;
    margin: 0 10px;
    cursor: pointer;
  }
`;
