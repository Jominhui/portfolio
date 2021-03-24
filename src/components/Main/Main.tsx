import React from "react";
import { Link } from "react-router-dom";
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
            <div className="main-content-title-under" />
          </div>
          <div className="main-content-info">
            소소하게 살아가는, 보고싶은 것을
            <br />
            하고싶은 것을 하는 개발자
          </div>
          <div className="main-content-btnarea">
            <Link to="/project" className="main-content-btnarea-btn">
              Portfolio
              <i className="line1"></i>
              <i className="line2"></i>
              <i className="line3"></i>
              <i className="line4"></i>
            </Link>
            <Link to="/profile" className="main-content-btnarea-btn">
              Profile
              <i className="line1"></i>
              <i className="line2"></i>
              <i className="line3"></i>
              <i className="line4"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
