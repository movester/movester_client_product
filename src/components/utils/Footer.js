import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterWrapper>
      <FooterLeftBlock>
        <div className="footer-top">
          <img src="/assets/logo.png" alt="뭅스터 로고" /> |<span>개인 정보 취급 방침</span> |<span>이용 약관</span> |
          <span>고객 센터</span>
        </div>
        <div className="footer-middle">
          <span>대표자: 표정연</span> |<span>사업자번호: 000-000000-0000</span> |
          <span>주소: 인천광역시 어쩌구 저쩌구</span> |<span>이메일: jnhro1@gmail.com</span>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 80px;
  border-top: 2px solid #2a1598;
  background: #fff;
`;

const FooterLeftBlock = styled.div`
  .footer-top {
    margin-bottom: 20px;
    img {
      width: 100px;
      margin-right: 10px;
    }
    span {
      margin: 0 10px;
      cursor: pointer;
    }
  }

  .footer-middle {
    margin-bottom: 10px;
    span {
      margin: 0 5px;
    }
  }
`;

const FooterRightBlock = styled.div`
  display: flex;

  img {
    width: 48px;
    height: 50px;
    margin: 0 10px;
  }
`;
