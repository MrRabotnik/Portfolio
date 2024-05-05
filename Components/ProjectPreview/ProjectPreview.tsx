import Link from "next/link";
import React from "react";

import "./ProjectPreview.scss";

const ProjectPreview = ({ project }: any) => {
    return (
        <div className="all_projects_container">
            <div className="project_box">
                <div className="project_title_container">{project.name}</div>
                <img
                    src={project.previewImage}
                    width="100%"
                    height="106%"
                />
            </div>
            <div className="description_box">
                <h3>
                    Creation Time | <span>{project.creationTime}</span>
                </h3>
                <h3>
                    Technologies Used | <span>{project.technologies}</span>
                </h3>
                <h3>
                    Category | <span>{project.category}</span>
                </h3>
                <Link
                    target="_blank"
                    href={project.link}
                    className="preview_btn"
                >
                    <button>Preview</button>
                </Link>
            </div>
            <div className="title">
                <div className="title-text">{project.name}</div>
            </div>
        </div>
    );
};

export default ProjectPreview;
