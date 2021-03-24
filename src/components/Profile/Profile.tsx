import React from "react";
import "./Profile.scss";
import "../../util/animation.scss";
import facebook from "../../assets/images/Icon/facebook.svg";
import insta from "../../assets/images/Icon/instagram.svg";
import github from "../../assets/images/Icon/github.svg";
import roket from "../../assets/images/Icon/roket.svg";
import Skills from "../../models/skills";
import Frize from "../../models/frize";

interface ProfileProps {}

const Profile = ({}: ProfileProps) => {
  return (
    <>
      <div className="profile">
        <div className="profile-area">
          <div className="profile-area-box">
            <div className="profile-area-box-photo"></div>
            <div className="profile-area-box-text">
              <div className="profile-area-box-text-name">조민희</div>
              <div className="profile-area-box-text-info">
                프론트엔드 개발자 <br /> 2021년 7월 19일부터 현장실습
                가능합니다.
              </div>
            </div>
            <div className="profile-area-box-social">
              <a
                href="https://www.facebook.com/profile.php?id=100027446058102"
                target="_blank"
              >
                <img src={facebook} alt="" />
              </a>
              <a href="https://www.instagram.com/rihito2021/" target="_blank">
                <img src={insta} alt="" />
              </a>
              <a href="https://github.com/Jominhui" target="_blank">
                <img src={github} alt="" />
              </a>
              <a
                href="https://www.rocketpunch.com/@jominhyidadd83988cbb462f"
                target="_blank"
              >
                <img src={roket} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-my">
          <div className="profile-my-title">간단한 자기소개</div>
          <div className="profile-my-info">
            소소하게 하고싶은 것을 하고, 만들고 싶은 것을 만드는 개발자
            조민희입니다.
          </div>
        </div>

        <div className="profile-info">
          <div className="profile-info-left">
            <div className="profile-info-left-title">My Current Skills</div>
            {Skills.map((res) => {
              return (
                <div className="profile-info-left-skill">
                  <img src={res.image} alt="" className={res.className} />
                  <div className="profile-info-left-skill-prograss">
                    <div
                      className={`profile-info-left-skill-prograss-${res.className}`}
                      style={{
                        width: `${res.check}`,
                        animation: `${res.animation} 1s`,
                        backgroundColor: `${res.color}`,
                      }}
                    ></div>
                  </div>
                  <div className="profile-info-left-skill-check">
                    {res.check}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="profile-info-right">
            <div className="profile-info-right-title">수상 및 자격증</div>
            {Frize.map((res) => {
              return (
                <div className="profile-info-right-list">
                  <div className="profile-info-right-list-title">
                    {res.name}
                  </div>
                  <div className="profile-info-right-list-info">{res.info}</div>
                  <div className="profile-info-right-list-info">{res.date}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="profile-infoarea">
          <div>
            <div className="profile-my-title">경력 혹은 학력</div>
            <div className="profile-my-info">
              대구 소프트웨어 마이스터 고등학교 ( 2019.03 ~ 현재 재학중 )
            </div>
          </div>

          <div>
            <div className="profile-my-title">연락처</div>
            <div className="profile-my-info">
              Phone : 010-8798-2443 | Email : rihito2021@naver.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
