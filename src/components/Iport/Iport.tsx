import React from "react";
import "./Iport.scss";
import IportBack from "../../assets/images/Iport/Iport.svg";
import IportIcon from "../../assets/images/Iport/IportIcon.svg";
import ProjectInfo from "../ProjectInfo";
import MainPage from "../../assets/images/Iport/MainPage.png";
import ProfilePage from "../../assets/images/Iport/ProfilePage.png";
import ProjectPage from "../../assets/images/Iport/ProjectPage.png";
import ProjectinfoPage from "../../assets/images/Iport/ProjectInfoPage.png";

interface IportProps {}

const Iport = ({}: IportProps) => {
  return (
    <>
      <ProjectInfo
        title="I`Port"
        date="2021.03 ~ 현재 진행중"
        back={IportBack}
        photo={IportIcon}
        color="black"
      >
        <div className="iport">
          <div className="iport-title">⭐소개</div>
          <div className="iport-info">
            나만의 포트폴리오 사이트를 만들기 위해 시작한 프로젝트입니다. <br />
            디자인과 프론트 복습을 주 목적으로 하여 개발하였고, 앞으로 개인
            프로젝트 정리 사이트로 사용할 생각입니다.
          </div>

          <div className="iport-title">😊멤버</div>
          <div className="iport-info">개인 프로젝트 입니다.</div>

          <div className="iport-title">💻사용 기술</div>
          <div className="iport-info">
            <p>Frontend</p>
            React.js, TypeScript, Scss, Mobx
          </div>

          <div className="iport-title">주요 기능</div>
          <div className="iport-info">
            <p>📄 프로젝트 확인</p>- 여태까지 진행했던 프로젝트들을 확인할 수
            있습니다. <br /> - 프로젝트를 통해 배운점, 프로젝트중 어느 부분을
            맡았는지 등을 확인할 수 있습니다.
          </div>

          <div className="iport-title">프로젝트를 통해 얻은것</div>
          <div className="iport-info">
            <p>1. 공부했던것을 정리하는 법</p>이 프로젝트를 하면서 전에 만들었던
            프로젝트들을 하나하나 보았습니다. 코드의 문법이나 사용했던 언어들이
            달랐고 '아 이때는 이렇게 코드를 작성했구나' 하면서 안좋은 습관이나
            코드들은 좋게 바꾸어 좀 더 좋은 코드를 적을 수 있었습니다.
          </div>

          <div className="iport-title">페이지 구성</div>
          <div className="iport-image">
            <div>
              <img src={MainPage} />
              <img src={ProfilePage} />
            </div>
            <div>
              <img src={ProjectPage} />
              <img src={ProjectinfoPage} />
            </div>
          </div>

          <div className="iport-title">MORE</div>
          <div className="iport-info">
            <a href="https://github.com/Jominhui/portfolio" target="_blank">
              👋 https://github.com/Jominhui/portfolio
            </a>
          </div>
        </div>
      </ProjectInfo>
    </>
  );
};

export default Iport;
