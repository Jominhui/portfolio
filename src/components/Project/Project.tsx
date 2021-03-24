import React from "react";
import "./Project.scss";
import Projects from "../../models/projects";
import { Link } from "react-router-dom";

interface ProjectProps {
  handlePageName: (page: string) => void;
}

const Project = ({ handlePageName }: ProjectProps) => {
  return (
    <>
      <div className="project">
        <div className="project-container">
          <div className="project-container-title">
            <p className="project-container-title-text">Showing Project</p>
            <div className="project-container-title-under" />
          </div>
          {Projects.map((res) => {
            return (
              <Link
                to={res.url}
                className="project-container-content"
                onClick={() => handlePageName(res.name)}
              >
                <div className="project-container-content-area">
                  <img
                    className="project-container-content-area-image"
                    src={res.image}
                  />
                  <div className="project-container-content-area-info">
                    <div className="project-container-content-area-info-title">
                      {res.name}
                    </div>
                    <div className="project-container-content-area-info-date">
                      {res.date}
                    </div>
                    <div className="project-container-content-area-info-text">
                      {res.info}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Project;
