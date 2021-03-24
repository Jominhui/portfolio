import React from "react";
import "./Ida.scss";
import IDa from "../../assets/images/Ida/IDA.svg";
import IDaIcon from "../../assets/images/Ida/IDAIcon.svg";
import ProjectInfo from "../ProjectInfo";
import HtmlIcon from "../../assets/images/Icon/html.svg";
import ReactIcon from "../../assets/images/Icon/React.svg";
import ScssIcon from "../../assets/images/Icon/sass.svg";
import TsIcon from "../../assets/images/Icon/typescript.svg";
import Mobx from "../../assets/images/Icon/mobx.svg";
import Kotlin from "../../assets/images/Icon/kotlin.svg";
import SpringBoot from "../../assets/images/Icon/spring.svg";

interface IdaProps {}

const Ida = ({}: IdaProps) => {
  return (
    <>
      <ProjectInfo
        title="IDa"
        date="2021.08 ~ 현재진행중"
        back={IDa}
        photo={IDaIcon}
      >
        <div className="memory">
          <div className="memory-title">소개</div>
          <div className="memory-info">
            대구소프트웨어고등학교 신입생 입학 시스템입니다. <br />
            학생들이 쉽고 편리하게 원서 접수를 할 수 있도록 현재 제작 중입니다.
          </div>

          <div className="memory-title">멤버</div>
          <div className="memory-info">차승호, 조민희, 정성훈, 안채원</div>

          <div className="memory-title">사용 기술</div>
          <div className="memory-icon">
            <img src={HtmlIcon} alt="" />
            <img src={ReactIcon} alt="" />
            <img src={ScssIcon} alt="" />
            <img src={TsIcon} alt="" />
            <img src={Mobx} alt="" />
            <img src={Kotlin} alt="" />
            <img src={SpringBoot} alt="" />
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
        </div>
      </ProjectInfo>
    </>
  );
};

export default Ida;
