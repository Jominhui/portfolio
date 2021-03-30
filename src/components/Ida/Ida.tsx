import React from "react";
import "./Ida.scss";
import ProjectInfo from "../ProjectInfo";
import IDa from "../../assets/images/Ida/IDA.svg";
import IDaIcon from "../../assets/images/Ida/IDAIcon.svg";
import Page1 from "../../assets/images/Ida/page1.png";
import Page2 from "../../assets/images/Ida/page2.png";
import Page3 from "../../assets/images/Ida/page3.png";
import Page4 from "../../assets/images/Ida/page4.png";
import Page5 from "../../assets/images/Ida/page5.png";
import Page6 from "../../assets/images/Ida/page6.png";

interface IdaProps {}

const Ida = ({}: IdaProps) => {
  return (
    <>
      <ProjectInfo
        title="IDa"
        date="2020.08 ~ 현재진행중"
        back={IDa}
        photo={IDaIcon}
        color=""
      >
        <div className="memory">
          <div className="memory-title">⭐소개</div>
          <div className="memory-info">
            대구소프트웨어고등학교 신입생 입시 원서 사이트입니다. <br />
            학생들이 쉽고 편리하게 원서 접수를 할 수 있도록 현재 제작 중이며,
            <br />
            이전까지는 외주로 진행되던 입시 원서 사이트를 새로 개발한
            프로젝트입니다.
          </div>

          <div className="memory-title">😊멤버</div>
          <div className="memory-info">
            <p>차승호 (Web & Server)</p>
            웹에서는 원서 인쇄, 헤더, 반응형 UI, access token 자동 갱신,
            전체적인 코드 구조와 리펙토링을 맡았고 <br />
            서버는 모든 부분을 맡았습니다.
            <p>조민희 (Web)</p>
            메인 페이지와 원서 작성부분 (학생정보, 보호자정보, 증명사진, 성적,
            학력, 자기소개서 등)과 (관리자) <br />
            지원/접수 현황별 통계, 지역/출신교별 현황 통계를 맡았습니다.
            <p>정성훈 (Web)</p>
            로그인/회원가입, 회원정보 수정, 비밀번호 찾기, 접수현황 조회,
            접수결과 확인과 (관리자) 면접 점수 관리,
            <br /> 2차전형 점수 관리를 맡았습니다.
            <p>안채원 (Web)</p>
            Q&A, FAQ, 공지사항 게시판 부분과 (관리자) 지원자 현황, 1,2차 합격자
            조회, 경쟁률 조회를 맡았습니다.
          </div>

          <div className="memory-title">💻사용 기술</div>
          <div className="memory-info">
            <p>Frontend</p>
            React.js, TypeScript, Scss, MobX
            <p>Backend</p>
            Spring Boot, Kotlin, Thymeleaf, JPA, Swagger, Docker, MariaDB, Poi
          </div>

          <div className="memory-title">주요 기능</div>
          <div className="memory-info">
            <p>📄 원서 접수</p>- 단계별로 나누어 원서 접수가 가능합니다.
            <p>✔️ 손쉬운 확인</p>
            - 접수 현황, 우편 도착 현황 등을 쉽게 확인이 가능합니다. <br />-
            1차, 2차 학격 조회를 사이트에서 간편하게 할 수 있습니다.
            <p>👩🏻‍💼 관리자</p>- 관리자 페이지에서 여러 통계와 점수 관리 등 엑셀
            통계, 엑셀 업로드로 점수를 관리합니다.
          </div>

          <div className="memory-title">프로젝트를 통해 얻은것</div>
          <div className="memory-info">
            <p>1. 전체적인 코드의 정리</p>
            자주 사용하는 css 컬러나 혹은 지역 목록 또는 날짜, 서버에서 넘어온
            값을 바꿔주는 컨버터등을 만들어 다른 파일로 나누어 두는 것이
            로직에서나 코드상에서나 사용하기 쉽고 보기 편하다는 것을 알았습니다.
            <p>2. 인원의 구성과 사용 기술의 중요성</p>
            나르샤 프로젝트를 진행하고 다른 협업 프로텍트를 진행하면서 각자 다른
            기술을 사용하는 사람들이 많았습니다. 만약 기술 스택이 다른 사람과
            만나면 갈등이 생기고, 그 갈등은 프로젝트에 많은 지장을 주었습니다.
            그렇기 때문에 회사에서 어던 기술을 원하는지 알아보고 지원을 하고, 내
            분야가 맞는지도 생각을 해야할 것 같습니다.
            <p>3. 라이브러리에 대한 생각</p>
            프로젝트를 하면서 많은 라이브러리를 사용하게 될 수도 있습니다. 물론
            자기가 직접 만드는 것이 좋겠지만 그러하지 못한 경우가 대다수 이기에
            만들어진 라이브러리를 사용하게 됩니다. 하지만 라이브러리를
            사용하면서 불편한 점이 생각보다 많았습니다. 라이브러리 때문에 변수나
            값의 전달이 제대로 안되는 경우도 있었고, ui가 바뀌는 경우도
            많았습니다. 라이브러리가 편하고 좋은 방법이지만 가능한 쓰지 않는
            방향으로 나아갈 것 같습니다.
          </div>

          <div className="memory-title">페이지 구성</div>
          <div className="memory-image">
            <div>
              <img src={Page1} alt="" />
              <img src={Page2} alt="" />
            </div>
            <div>
              <img src={Page3} alt="" />
              <img src={Page4} alt="" />
            </div>
            <div>
              <img src={Page5} alt="" />
              <img src={Page6} alt="" />
            </div>
          </div>

          <div className="memory-title">MORE</div>
          <div className="memory-info">
            보안상 저장소가 Private이기 때문에 코드를 볼수 없습니다.
          </div>
        </div>
      </ProjectInfo>
    </>
  );
};

export default Ida;
