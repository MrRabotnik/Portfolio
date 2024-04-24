"use client";

import Image from "next/image";
import Link from "next/link";

import "./page.scss";
import IMAGES from "../utils/images";
import projectsArray from "@/lib/projects";
import { useState } from "react";

export default function Home() {
    const [previewingProject, setPreviewingProject] = useState({
        name: "Sorting Visualizer",
        creationTime: "2 days",
        preview: IMAGES.project1,
        technologiesUsed: "HTML/SCSS, JavaScript(jQuery)",
        category: "Entertainment/Education",
        link: "https://mrrabotnik.github.io/Sort-Visualizer/",
    });

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
                    />
                </div>
            </section>

            {/* ------------------------------------------------------------------------------------------------
												MY PROJECTS
	        ------------------------------------------------------------------------------------------------ --> */}
            <div className="section-heading">My Projects</div>

            <section className="my-projects-section">
                <div className="my-projects-information-container">
                    <div
                        className="preview-box"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className="left-arrow-container">
                            <Image
                                src={IMAGES.leftArrow}
                                alt="Left Arrow"
                                priority
                            />
                        </div>

                        <div className="preview-img-box">
                            <Image
                                src={IMAGES.screenshot1}
                                alt="Project"
                                priority
                            />
                        </div>

                        <div className="right-arrow-container">
                            <Image
                                src={IMAGES.leftArrow}
                                alt="Left Arrow"
                                priority
                            />
                        </div>
                    </div>

                    <div className="project-information project-information1">
                        <h3 className="project-title">{previewingProject.name}</h3>
                        <h4>
                            Creation Time | <span>{previewingProject.creationTime}</span>{" "}
                        </h4>
                        <h4>
                            Technologies Used | <span>{previewingProject.technologiesUsed}</span>
                        </h4>
                        <h4>
                            Category | <span>{previewingProject.category}</span>
                        </h4>
                        <h5 className="view-preview">Preview</h5>
                    </div>
                </div>

                <div
                    className="my-projects-box"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <div
                        className="project-boxes project-boxes1"
                        id="box-1"
                    >
                        <div></div>
                    </div>
                    <div
                        className="project-boxes project-boxes2"
                        id="box-2"
                    >
                        <div></div>
                    </div>
                    <div
                        className="project-boxes project-boxes3"
                        id="box-3"
                    ></div>
                    <div
                        className="project-boxes project-boxes4"
                        id="box-4"
                    >
                        <div></div>
                    </div>
                    <div
                        className="project-boxes project-boxes5"
                        id="box-5"
                    >
                        <div></div>
                    </div>
                </div>

                <div className="view-all-projects-container">
                    <div className="left-side"></div>
                    <Link href="/projects">
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
