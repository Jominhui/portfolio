import React from "react";
import "./Iport.scss";
import IportBack from "../../assets/images/Iport/Iport.svg";
import IportIcon from "../../assets/images/Iport/IportIcon.svg";
import ProjectInfo from "../ProjectInfo";
import HtmlIcon from "../../assets/images/Icon/html.svg";
import ReactIcon from "../../assets/images/Icon/React.svg";
import ScssIcon from "../../assets/images/Icon/sass.svg";
import TsIcon from "../../assets/images/Icon/typescript.svg";
import Mobx from "../../assets/images/Icon/mobx.svg";

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
        <div className="memory">
          <div className="memory-title">소개</div>
          <div className="memory-info">
            나만의 포트폴리오 사이트를 만들기 위해 시작한 프로젝트입니다. <br />
            디자인과 프론트 복습을 주 목적으로 하여 개발하였고, 앞으로 개인
            프로젝트 정리 사이트로 사용할 생각입니다.
          </div>

          <div className="memory-title">멤버</div>
          <div className="memory-info">조민희</div>

          <div className="memory-title">사용 기술</div>
          <div className="memory-icon">
            <img src={ReactIcon} alt="" />
            <img src={TsIcon} alt="" />
            <img src={Mobx} alt="" />
            <img src={HtmlIcon} alt="" />
            <img src={ScssIcon} alt="" />
          </div>

          <div className="memory-title">프로젝트를 통해 얻은것</div>
          <div className="memory-info">
            <p>1. 공부했던것을 정리하는 법</p>이 프로젝트를 하면서 전에 만들었던
            프로젝트들을 하나하나 보았습니다. 코드의 문법이나 사용했던 언어들이
            달랐고 '아 이때는 이렇게 코드를 작성했구나' 하면서 안좋은 습관이나
            코드들은 좋게 바꾸어 좀 더 좋은 코드를 적을 수 있었습니다.
          </div>
        </div>
      </ProjectInfo>
    </>
  );
};

export default Iport;
