"use client";
import { useEffect, useState } from "react";

import "./page.scss";
import ProjectPreview from "@/Components/ProjectPreview/ProjectPreview";
import axios from "axios";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get(`api/project/all`)
            .then((res) => {
                setProjects(res.data.projects);
                console.log(res.data.projects);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <section className="all_projects_section">
            {projects.length
                ? projects.map((project: any, index: number) => {
                      return (
                          <ProjectPreview
                              key={index}
                              project={project}
                          ></ProjectPreview>
                      );
                  })
                : ""}
        </section>
    );
};

export default ProjectsPage;
