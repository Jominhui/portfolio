import React from "react";
import "./ProjectInfo.scss";

interface ProjectInfoProps {
  title: string;
  date: string;
  children: React.ReactNode;
  back: string;
  photo: string;
  color: string | null;
}

const ProjectInfo = ({
  title,
  children,
  date,
  back,
  photo,
  color,
}: ProjectInfoProps) => {
  return (
    <>
      <div className="projectinfo">
        <div
          className="projectinfo-area"
          style={{
            backgroundImage: `url(${back})`,
          }}
        >
          <div className="projectinfo-area-box">
            <img className="projectinfo-area-box-photo" src={photo} />
            <div className="projectinfo-area-box-text">
              <div
                className="projectinfo-area-box-text-name"
                style={color ? { color: color } : { color: "white" }}
              >
                {title}
              </div>
              <div className="projectinfo-area-box-text-info">{date}</div>
            </div>
          </div>
        </div>
        <div className="projectinfo-info">{children}</div>
      </div>
    </>
  );
};

export default ProjectInfo;
