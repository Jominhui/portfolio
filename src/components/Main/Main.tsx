import React from "react";
import "./Main.scss";

interface MainProps {}

const Main = ({}: MainProps) => {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <div className="main-content-title">
            <p className="main-content-title-text1">The New</p>
          </div>
          <div className="main-content-title">
            <p className="main-content-title-text2">Way To</p>
            <p className="main-content-title-text3"> Develop</p>
            <div className="main-content-title-under"></div>
          </div>
          <div className="main-content-info">
            소소하게 살아가는, 보고싶은 것을
            <br />
            하고싶은 것을 하는 개발자
          </div>
          <div className="main-content-btnarea">
            <div className="main-content-btnarea-btn">프로젝트</div>
            <div className="main-content-btnarea-btn">프로필</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
