"use client";

import Image from "next/image";
import Link from "next/link";

import "./page.scss";
import IMAGES from "../../../utils/images";
import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import axios from "axios";

export default function Home() {
    const localActive = useLocale();
    const [previewingProject, setPreviewingProject] = useState<any>({});

    const [itemOffSet, setItemOffSet] = useState(0);

    const itemCount = 5;

    const [projects, setProjects] = useState<any>([]);
    const [limitedProjects, setLimitedProjects] = useState([]);

    useEffect(() => {
        axios
            .get(`/${localActive}/api/project/all`)
            .then((res) => {
                const projectsArr = res.data.projects;
                setProjects(projectsArr);

                const slicedArr = projectsArr.slice(itemOffSet, itemOffSet + itemCount);
                console.log(slicedArr[2]);
                setPreviewingProject(slicedArr[2]);
                setLimitedProjects(slicedArr);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const previousProject = () => {
        setItemOffSet((prev) => prev - 1);
        setLimitedProjects(projects.slice(itemOffSet - 1, (itemOffSet - 1) + 5));
    };

    const nextProject = () => {
        setItemOffSet((prev) => prev + 1);
        setLimitedProjects(projects.slice(itemOffSet + 1, (itemOffSet + 1) + 5));
    };

    return (
        <main>
            <section className="home-section">
                <div
                    className="introduction"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                >
                    Hello, My name is <b>Sargis</b>
                    <br /> I am a Web Develoer and Designer,Problem Solver, also I am developing games just for fun and
                    experience, but the most important one...a person with humor :)
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <Image
                        className="profile-image"
                        src={IMAGES.pfp}
                        alt="Profile Image"
                        priority
                    />
                </div>
            </section>

            {/* ------------------------------------------------------------------------------------------------
												MY PROJECTS
	        ------------------------------------------------------------------------------------------------ --> */}
            <div className="section-heading">My Projects</div>

            <section className="my-projects-section">
                <div className="my-projects-information-container">
                    {projects.length ? (
                        <div
                            className="preview-box"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                        >
                            <div
                                className="left-arrow-container"
                                onClick={previousProject}
                            >
                                <Image
                                    src={IMAGES.leftArrow}
                                    alt="Left Arrow"
                                    priority
                                />
                            </div>
                            <div className="preview-img-box">
                                <Image
                                    width={100}
                                    height={100}
                                    src={projects[itemOffSet + 2].previewImage}
                                    alt="Project"
                                    priority
                                />
                            </div>

                            <div
                                className="right-arrow-container"
                                onClick={nextProject}
                            >
                                <Image
                                    src={IMAGES.leftArrow}
                                    alt="Left Arrow"
                                    priority
                                />
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    {projects.length ? (
                        <div className="project-information project-information1">
                            <h3 className="project-title">{projects[itemOffSet + 2].name}</h3>
                            <h4>
                                Creation Time | <span>{projects[itemOffSet + 2].creationTime}</span>{" "}
                            </h4>
                            <h4>
                                Technologies Used | <span>{projects[itemOffSet + 2].technologies}</span>
                            </h4>
                            <h4>
                                Category | <span>{projects[itemOffSet + 2].category}</span>
                            </h4>
                            <button className="view-preview">
                                <a href={projects[itemOffSet + 2].link}>Preview</a>
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>

                <div
                    className="my-projects-box"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    {limitedProjects.length
                        ? limitedProjects.map((project: any, index: number) => {
                              return (
                                  <div
                                      key={index}
                                      className={`project-boxes`}
                                      id={`box-${index + 1}`}
                                  >
                                      <Image
                                          width={100}
                                          height={100}
                                          src={project.previewImage}
                                          alt="Preview Image"
                                      />
                                  </div>
                              );
                          })
                        : ""}
                </div>

                <div className="view-all-projects-container">
                    <div className="left-side"></div>
                    <Link href={`${localActive}/projects`}>
                        <div className="view-all-projects">View All Projects</div>
                    </Link>
                    <div className="right-side"></div>
                </div>
            </section>
            {/* -----------------------------------------------------------------------------------------------------
												SKILLS SECTION
	----------------------------------------------------------------------------------------------------- */}

            <section className="skills_section">
                <div
                    className="hint_1"
                    data-aos="flip-down"
                >
                    <div id="hint_inner_contaner">
                        Hover on the box to see
                        <Image
                            src={IMAGES.eyeIcon}
                            alt="Eye Icon"
                        />
                    </div>
                </div>
                <div className="warning_div"></div>
                <div className="skills_box_container">
                    <div className="skill_box">
                        <div className="skills_container">
                            <h4>Html</h4>
                            <h4>Css</h4>
                            <h4>JavaScript(jQuery)</h4>
                            <h4>Python</h4>
                            <h4>PHP</h4>
                            <h4>React JS/Vue JS</h4>
                            <h4>OOP and MVC</h4>
                            <h4>AJAX</h4>
                            <h4>SQL, MySQL</h4>
                            <h4>Node.Js/Java</h4>
                        </div>
                        <div className="skill_box_cover_img">Programming Skills</div>
                    </div>

                    <div className="skill_box">
                        <div className="skills_container">
                            <h4>
                                Very Creative
                                <br />
                                (As you can see... :D)
                            </h4>
                            <h4>Negotiation Skills</h4>
                            <h4>Hard Worker</h4>
                            <h4>Communicable</h4>
                            <h4>Team Worker</h4>
                            <h4>Reliable and Honest</h4>
                        </div>
                        <div className="skill_box_cover_img">Social Skills</div>
                    </div>

                    <div className="skill_box">
                        <div className="skills_container">
                            <h4>Singing</h4>
                            <h4>Drawing</h4>
                            <h4>Dancing</h4>
                            <h4>Playing</h4>
                            <h4>Sports</h4>
                            <h4>Music</h4>
                            <h4>Fitness</h4>
                            <h4>Learning stuff</h4>
                        </div>
                        <div className="skill_box_cover_img">Hobbies</div>
                    </div>
                </div>
                <Image
                    src={IMAGES.cornerSpiderWeb}
                    id="corner_spider_web"
                    alt="corner_spider_web"
                />
                <Image
                    src={IMAGES.cornerWeb}
                    id="corner-web"
                    alt="corner-web"
                />
                <Image
                    src={IMAGES.cornerWeb}
                    id="corner-web2"
                    alt="corner-web"
                />
                <Image
                    src={IMAGES.spider}
                    id="spider"
                    alt="spider"
                />
                <Image
                    src={IMAGES.lamp}
                    id="lamp"
                    alt="lamp"
                />
            </section>
        </main>
    );
}
