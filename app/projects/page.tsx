"use client";

import Link from "next/link";
import React, { useState } from "react";

import "./page.scss";
import projectsArray from "../../lib/projects";
import ProjectPreview from "@/Components/ProjectPreview/ProjectPreview";

const ProjectsPage = () => {
    const [projects, setProjects] = useState(projectsArray);

    return (
        <section className="all_projects_section">
            {projects.map((project: any, index: number) => {
                return (
                    <ProjectPreview
                        key={index}
                        project={project}
                    ></ProjectPreview>
                );
            })}
        </section>
    );
};

export default ProjectsPage;
