import React from "react";
import "./Fdt.scss";
import FDT from "../../assets/images/FDT/FDTback.png";
import FDTlogo from "../../assets/images/FDT/FDTlogo.svg";
import ProjectInfo from "../ProjectInfo";
import Page1 from "../../assets/images/FDT/page1.png";
import Page2 from "../../assets/images/FDT/page2.png";
import Page3 from "../../assets/images/FDT/page3.png";
import Page4 from "../../assets/images/FDT/page4.png";

interface FdtProps {}

const Fdt = ({}: FdtProps) => {
  return (
    <>
      <ProjectInfo
        title="FDT 무인 기숙사 관리 시스템"
        date="2020.11 ~ 2020.11"
        back={FDT}
        photo={FDTlogo}
        color=""
      >
        <div className="fdt">
          <div className="fdt-title">⭐소개</div>
          <div className="fdt-info">
            코로나 19로 비대면이 중요시된 요즘, 기숙사에서 점호도 무인으로 할 수
            있도록 시스템을 개발하였습니다. <br />
            사감선생님의 일거리가 훨씬 줄어 학생들, 선생님들 모두 편리하게
            사용할 수 있습니다. <br />
            2020 마이스터고 연합 해커톤에서 제작하였습니다.
          </div>

          <div className="fdt-title">😊멤버</div>
          <div className="fdt-info">
            <p>차승호 (Web & Server)</p>
            웹은 간단하게 모달 부분 컴포넌트 구성, 서포트 역할을 하였으며 서버는
            출결 확인 부분, 점호 공지사항 부분, 건의사항,
            <br /> 이미지 업로드, 프로젝트 구조를 잡는 역할을 하였습니다. 또
            After Effect를 이용하여 발표영상 편집을 하였습니다.
            <p>이우찬 (Web & Server)</p>
            웹은 점호 공지사항, 분실물 관련 기능을 담당하였고, 서버는 출결확인
            스케쥴러부분, 유저, 분실물 관련 부분을 담당하였습니다.
            <p>조민희 (Web)</p>
            로그인/회원가입 부분과 건의사항, 출석 현황부분을 담당하였습니다.
            <p>윤석준 (Android)</p>
            학생용 안드로이드 앱 개발부분을 맡았습니다.
            <p>김효선 (Android)</p>
            태블릿용 (QR코드 표시, 점호 안내 표시) 안드로이드 앱 개발부분을
            맡았습니다.
            <p>김성민 (기획)</p>
            원래 분야가 임베디드 친구였기 때문에 기획쪽 부분을 많이 맡았습니다.
            전체적인 영상, 사용의 흐름을 기획하였습니다.
          </div>

          <div className="fdt-title">💻사용 기술</div>
          <div className="fdt-info">
            <p>Frontend</p>
            React.js, JavaScript, Scss, MobX
            <p>Backend</p>
            typeScript, Express, MySQL
          </div>

          <div className="fdt-title">주요 기능</div>
          <div className="fdt-info">
            <p>📄 QR 코드를 이용한 출석 확인</p>- 학생들은 학생용 안드로이드
            앱을 이용해 QR코드를 찍어 출석을 확인하고, 그 자리에서 안내사항을
            받아 볼 수 있습니다.
            <p>👩🏻‍💼 관리자</p>- 관리자는 관리자 페이지에서 출석 현황을 확인하고
            점호 내용을 수정하거나 추가할 수 있습니다.
            <p>✔️ 건의사항</p>- 학생들이 건의사항을 올리면, 관리자는 관리자
            페이지에서 건의사항들을 확인 할 수 있습니다. <br />- 관리자
            페이지에서 건의사항의 진행 상태를 변경할 수 있습니다. (대기, 기각,
            완료)
            <p>ℹ️ 분실물</p>- 학생들이 분실/습득물을 게시글로 올릴 수 있습니다.
            <br />- 잃어버린 위치도 기록하고, 상태를 추후 변경할 수 있습니다.
            (완료, 대기중)
          </div>

          <div className="fdt-title">프로젝트를 통해 얻은것</div>
          <div className="fdt-info">
            <p>1. 해커톤</p>
            짧은 시간 속에서 최대한 구조를 흐트리지 않으려 노력했습니다. 마음이
            다급하여 가끔 꼬이는 부분이 있었고, 실수도 있었지만 그 과정 속에서
            코딩 속도와 구조가 많이 향상되었습니다. 팀원들끼리 도움을 주고
            받으면서 했기에 더 좋게 만들수 있었던 것 같습니다.
          </div>

          <div className="fdt-title">페이지 구성</div>
          <div className="fdt-image">
            <div>
              <img src={Page1} alt="" />
              <img src={Page2} alt="" />
            </div>
            <div>
              <img src={Page3} alt="" />
              <img src={Page4} alt="" />
            </div>
          </div>

          <div className="fdt-title">MORE</div>
          <div className="fdt-info">
            <a href="https://github.com/F-Dormitory-Teacher" target="_blank">
              👋 https://github.com/F-Dormitory-Teacher
            </a>
          </div>
        </div>
      </ProjectInfo>
    </>
  );
};

export default Fdt;
