import React, { useEffect } from 'react';
import styled from 'styled-components';

import Main from '../components/common/Main';

function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Main>
      <StyledNav>
        <h1>MOVESTER 개인정보 처리방침</h1>
        <p>MOVESTER(뭅스터)는 ｢개인정보 보호법｣ 제30조에 따라 정보주체의 개인정보를 보호하고</p>
        <p>이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여</p>
        <p> 다음과 같이 개인정보 처리방침을 수립·공개합니다.</p>
      </StyledNav>

      <ContentWrap>
        <Grid>
          <Title>제 1조. 개인정보의 처리 목적</Title>
          <Content>
            MOVESTER(뭅스터) 은(는) 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적
            이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 ｢개인정보 보호법｣ 제18조에 따라 별도의 동의를
            받는 등 필요한 조치를 이행할 예정입니다. 1. 홈페이지 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스
            제공에 따른 본인 식별․인증, 회원자격 유지․관리, 서비스 부정이용 방지, 각종 고지․통지, 고충처리 목적으로
            개인정보를 처리합니다. 2. 재화 또는 서비스 제공 물품배송, 서비스 제공, 계약서․청구서 발송, 콘텐츠 제공,
            맞춤서비스 제공, 본인인증, 연령인증, 요금결제․정산, 채권추심을 목적으로 개인정보를 처리합니다. 3. 고충처리
            민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리결과 통보의 목적으로 개인정보를
            처리합니다.
          </Content>
          <Title>제 2조. 개인정보의 처리 및 보유 기간</Title>
          <Content>
            ① MOVESTER(뭅스터) 은(는) 법령에 따른 개인정보 보유․이용기간 또는 정보주체로부터 개인정보를 수집 시에
            동의받은 개인정보 보유․이용기간 내에서 개인정보를 처리․보유합니다. ② 각각의 개인정보 처리 및 보유 기간은
            다음과 같습니다. 1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 후 3개월까지 다만, 다음의 사유에
            해당하는 경우에는 해당 사유 종료 시까지 1) 관계 법령 위반에 따른 수사․조사 등이 진행 중인 경우에는 해당
            수사․조사 종료 시까지 2) 홈페이지 이용에 따른 채권․채무관계 잔존 시에는 해당 채권․채무관계 정산 시까지 3)
            탈퇴 시에는 혹시 모를 법령 위반에 따른 수사․조사를 대비하여 탈퇴 후 3개월 까지 2. 재화 또는 서비스 제공 :
            재화․서비스 공급완료 및 요금결제․정산 완료시까지 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지
            1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등 거래에 관한 기록 -
            표시․광고에 관한 기록 : 6개월 - 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년 - 소비자 불만 또는
            분쟁처리에 관한 기록 : 3년 2)「통신비밀보호법」에 따른 통신사실확인자료 보관 - 가입자 전기통신일시,
            개시․종료시간, 상대방 가입자번호, 사용도수, 발신기지국 위치추적자료 : 1년 - 컴퓨터통신, 인터넷 로그기록자료,
            접속지 추적자료 : 3개월
          </Content>
          <Title>제 3조. 개인정보의 파기</Title>
          <Content>
            ① MOVESTER(뭅스터) 은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
            지체없이 해당 개인정보를 파기합니다. ② 정보주체로부터 동의받은 개인정보 보유기간이 경과하거나 처리목적이
            달성되었음에도 불구하고 다른 법령에 따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
            데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다. ③ 개인정보 파기의 절차 및 방법은 다음과
            같습니다. 1. 파기절차 MOVESTER(뭅스터) 은(는) 파기 사유가 발생한 개인정보를 선정하고, MOVESTER(뭅스터)의
            개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다. 2. 파기방법 MOVESTER(뭅스터) 은(는) 전자적 파일
            형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로
            분쇄하거나 소각하여 파기합니다.
          </Content>
          <Title>제 4조. 정보주체와 법정대리인의 권리 의무 및 그 행사방법</Title>
          <Content>
            ① 정보주체는 MOVESTER(뭅스터)에 대해 언제든지 개인정보 열람․정정․삭제․처리정지 요구 등의 권리를 행사할 수
            있습니다. ② 제1항에 따른 권리 행사는 MOVESTER(뭅스터)에 대해 개인정보보호법 시행령 제41조제1항에 따라 서면,
            전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며, MOVESTER(뭅스터) 은(는) 이에 대해 지체없이
            조치하겠습니다. ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실
            수 있습니다. 이 경우 “개인정보 처리 방법에 관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
            제출하셔야 합니다. ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제4항, 제37조 제2항에 의하여
            정보주체의 권리가 제한 될 수 있습니다. ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집
            대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다. ⑥ MOVESTER(뭅스터) 은(는) 정보주체 권리에 따른
            열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를
            확인합니다.{' '}
          </Content>
          <Title>제 5조. 개인정보 보호책임자</Title>
          <Content>
            {' '}
            ① MOVESTER(뭅스터) 은(는) 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의
            불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다. ▶ 개인정보 보호책임자
            성명 : 조나현 직책 : 대표 연락처 : 010-7919-9703, jnhro1@gmail.com, ※ 개인정보 보호 담당부서로 연결됩니다. ②
            정보주체께서는 MOVESTER(뭅스터) 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의,
            불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. MOVESTER(뭅스터)
            은(는) 정보주체의 문의에 대해 지체없이 답변 및 처리해드릴 것입니다.
          </Content>
          <Title>제 6조. 처리하는 개인정보의 항목</Title>
          <Content>
            MOVESTER(뭅스터) 은(는) 다음의 개인정보 항목을 처리하고 있습니다. 1. 홈페이지 회원 가입 및 관리 필수항목 :
            성명, 이메일주소, 비밀번호 2. 재화 또는 서비스 제공 ․필수항목 : 성명, 이메일주소, 비밀번호 3. 인터넷 서비스
            이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다. ․IP주소, 쿠키, MAC주소, 서비스
            이용기록, 방문기록
          </Content>
          <Title>제 7조. 개인정보의 안정성 확보조치에 관한 사항</Title>
          <Content>
            MOVESTER(뭅스터) 은(는) 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다. 1. 관리적 조치 :
            내부관리계획 수립․시행, 정기적 직원 교육 등 2. 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리,
            접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치 3. 물리적 조치 : 전산실, 자료보관실 등의
            접근통제
          </Content>
          <Title>제 8조. 개인정보 열람청구</Title>
          <Content>
            ‘제 5조. 개인정보 보호책임자에 관한 사항’의 ‘개인정보 보호 담당부서’에서 개인정보 열람청구 업무를
            담당합니다.
          </Content>
          <Title>제 9조. 권익침해 구제방법</Title>
          <Content>
            정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원
            개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타 개인정보침해의 신고,
            상담에 대하여는 아래의 기관에 문의하시기 바랍니다. 1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972
            (www.kopico.go.kr) 2. 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr) 3. 대검찰청 : (국번없이)
            1301 (www.spo.go.kr) 4. 경찰청 : (국번없이) 182 (cyberbureau.police.go.kr)
            「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의
            규정에 의한 요구에 대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의 침해를 받은 자는
            행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다. ※ 행정심판에 대해 자세한 사항은
            중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
          </Content>
        </Grid>
      </ContentWrap>
    </Main>
  );
}

export default PrivacyPolicyPage;

const StyledNav = styled.nav`
  width: 100%;
  min-height: 16rem;
  height: auto;
  padding: 5rem;
  background: linear-gradient(to bottom, #e5e4f0 1%, #ffffff);
  text-align: center;

  h1 {
    font-size: 28px;
    color: #948fbf;
    font-weight: 700;
    margin-bottom: 3rem;
  }

  p {
    font-size: 18px;
    color: #948fbf;
    line-height: 24px;
  }

  @media screen and (max-width: 500px) {
    height: auto;
    padding: 5rem 1rem;

    h1 {
      font-size: 24px;
    }
  }
`;

const ContentWrap = styled.div`
  min-height: 49vh;
  width: 100%;
  padding: 3rem 15%;

  @media screen and (max-width: 600px) {
    padding: 3rem;
  }
`;

const Grid = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 2fr 5fr;
  row-gap: 20px;
  column-gap: 20px;
  align-items: center;
  
  @media screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.div`
  min-height: 40px;
  height: auto;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.darkPurple};
  text-align: left;

  @media screen and (max-width: 1050px) {
    text-align: center;
  }
`;

const Content = styled.div`
  padding: 10px;
  text-align: left;
  font-size: 16px;
  line-height: 22px;
  color: #666666;
  margin-bottom: 3rem;
`;