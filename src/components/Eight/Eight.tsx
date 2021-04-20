import React from "react";
import "./Eight.scss";
import ProjectInfo from "../ProjectInfo";
import EightMain from "../../assets/images/Eight/main1.png";
import Logo from "../../assets/images/Eight/eightLogo.svg";
import Main1 from "../../assets/images/Eight/main1.png";
import Main2 from "../../assets/images/Eight/main2.png";
import Main3 from "../../assets/images/Eight/main3.png";
import Main4 from "../../assets/images/Eight/main4.png";
import game1 from "../../assets/images/Eight/game1.png";
import game2 from "../../assets/images/Eight/game2.png";
import game3 from "../../assets/images/Eight/game3.png";
import game4 from "../../assets/images/Eight/game4.png";
import artist from "../../assets/images/Eight/artist.png";
import studio1 from "../../assets/images/Eight/studio1.png";
import studio2 from "../../assets/images/Eight/studio2.png";
import books1 from "../../assets/images/Eight/book1.png";
import books2 from "../../assets/images/Eight/books2.png";

interface EightProps {}

const Eight = ({}: EightProps) => {
  return (
    <>
      <ProjectInfo
        title="Eight Studio newClone"
        date="2020.03 ~ 진행중"
        back={EightMain}
        photo={Logo}
        color=""
      >
        <div className="fdt">
          <div className="fdt-title">⭐소개</div>
          <div className="fdt-info">
            학교 웹프로그래밍 실무 시간에 프로젝트로 만든 사이트입니다.
            <br /> 그림을 그리면서 보았고 가고싶었던 회사인 에이트 스튜디오
            사이트를 디자인을 새로하고
            <br /> React와 TypeScript, MobX를 사용하여 만들었습니다.
          </div>

          <div className="fdt-title">😊멤버</div>
          <div className="fdt-info">개인 프로젝트입니다.</div>

          <div className="fdt-title">💻사용 기술</div>
          <div className="fdt-info">
            <p>Frontend</p>
            React.js, Typ eScript, Scss, MobX
          </div>

          <div className="fdt-title">주요 기능</div>
          <div className="fdt-info">
            <p>📄 메인 페이지</p>- 메인 페이지에는 회사에서 운영하는
            네오아카데미와 회사에 대한 소개가 있습니다.
            <p>👩🏻‍💼 아티스트</p>- 회사에 소속해 있는 아티스트분들을 확인 할 수
            있습니다.
            <p>💻 게임 </p>- 회사에서 만든 게임들을 확인 할 수 있습니다.
            <p>🎬 스튜디오</p>- 회사에 의뢰를 신청할 수 있습니다.
            <br />- 아티스트분들이 그린 그림을 볼수 있습니다.
            <p>💼 스토어</p>- 아티스트 분들이 만드신 굿즈 혹은 책을 확인 할 수
            있습니다.
          </div>

          <div className="fdt-title">프로젝트를 통해 얻은것</div>
          <div className="fdt-info">
            <p>1. 디자인</p>
            기존 페이지에서 합칠 수 있는 메뉴나 새로 만들 페이지의 구성을
            생각하는데 시간이 가장 오래 걸렸습니다. 만들어 보고 싶었던 스크롤
            애니메이션이나 풀페이지 스크롤을 넣으려고 많은 고민을 했고 차차
            완성되어가는 페이지들을 보니 기분이 좋고 뿌듯했습니다.
            <p>2. 스크롤 애니메이션</p>
            스크롤을 하면 어떠한 특정 애니메이션이 나오는 방법입니다. 메인과
            게임 페이지에는 스크롤하면 전체 페이지가 단계별로 바뀌는
            애니메이션을, 스튜디오와 아티스트 페이지는 스크롤을 내리면 요소가
            나오도록 해두었습니다.
          </div>

          <div className="fdt-title">페이지 구성</div>
          <div className="fdt-image">
            <div>메인페이지</div>
            <div>
              <img src={Main1} alt="" />
              <img src={Main2} alt="" />
            </div>
            <div>
              <img src={Main3} alt="" />
              <img src={Main4} alt="" />
            </div>

            <div>게임 페이지</div>
            <div>
              <img src={game1} alt="" />
              <img src={game2} alt="" />
            </div>
            <div>
              <img src={game3} alt="" />
              <img src={game4} alt="" />
            </div>

            <div>아티스트 페이지</div>
            <div>
              <img src={artist} alt="" />
            </div>

            <div>스튜디오 페이지</div>
            <div>
              <img src={studio1} alt="" />
              <img src={studio2} alt="" />
            </div>

            <div>스토어 페이지</div>
            <div>
              <img src={books1} alt="" />
              <img src={books2} alt="" />
            </div>
          </div>

          <div className="fdt-title">MORE</div>
          <div className="fdt-info">
            <a
              href="https://github.com/Jominhui/Eight-Studio-NewClone"
              target="_blank"
            >
              👋 https://github.com/Jominhui/Eight-Studio-NewClone
            </a>
          </div>
        </div>
      </ProjectInfo>
    </>
  );
};

export default Eight;
