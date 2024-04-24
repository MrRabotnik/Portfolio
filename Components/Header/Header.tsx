import Image from "next/image";
import React from "react";

import "./Header.scss";
import IMAGES from "../../utils/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <div className="hello-world">Hello World!</div>
            </div>
            <div className="navigation-through-site">
                <div className="navigation-links">
                    <Link href="/">Home</Link>
                </div>
                <div className="navigation-links">My Projects</div>
                <div className="navigation-links">Skills</div>
                <div className="navigation-links">Resume</div>
                <div className="navigation-links">Contact Me</div>
                <div className="hamburger-menu">
                    <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>
                </div>
                <Image
                    src={IMAGES.playButton}
                    alt={"Play Button"}
                    priority
                    className="volume-btn"
                />
            </div>
        </header>
    );
};

export default Header;
