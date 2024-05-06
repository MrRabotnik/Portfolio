"use client";
import { useEffect, useState } from "react";

import "./page.scss";
import ProjectPreview from "@/Components/ProjectPreview/ProjectPreview";
import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import dynamic from "next/dynamic";
import projectsJSON from "../../../../My-Portfolio.projects";

const Skeleton = dynamic(() => import("react-loading-skeleton"));

const ProjectsPage = () => {
    const [projects, setProjects] = useState(projectsJSON);

    // useEffect(() => {
    //     axios
    //         .get(`api/project/all`)
    //         .then((res) => {
    //             setProjects(res.data.projects);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    return (
        <section className="all_projects_section">
            <div className="container">
                {projects.length ? (
                    projects.map((project: any, index: number) => {
                        return (
                            <ProjectPreview
                                key={index}
                                project={project}
                            ></ProjectPreview>
                        );
                    })
                ) : (
                    <>
                        <Skeleton
                            highlightColor="rgb(58, 39, 183)"
                            containerClassName="project-box-skeleton"
                        />
                        <Skeleton
                            highlightColor="rgb(58, 39, 183)"
                            containerClassName="project-box-skeleton"
                        />
                        <Skeleton
                            highlightColor="rgb(58, 39, 183)"
                            containerClassName="project-box-skeleton"
                        />
                        <Skeleton
                            highlightColor="rgb(58, 39, 183)"
                            containerClassName="project-box-skeleton"
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export default ProjectsPage;
