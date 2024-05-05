"use client";

import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import { useLocale } from "next-intl";

const Header = () => {
    const localActive = useLocale();

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {mobileMenuOpen ? (
                <aside className="mobile-menu">
                    <div
                        className="close-mobile-menu"
                        onClick={() => {
                            setMobileMenuOpen(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faX} />
                    </div>
                    <div className="navigation-links">
                        <Link
                            href={"/"}
                            onClick={() => {
                                setMobileMenuOpen(false);
                            }}
                        >
                            Home
                        </Link>
                    </div>
                    <div className="navigation-links">
                        <Link
                            href={`/${localActive}/projects`}
                            onClick={() => {
                                setMobileMenuOpen(false);
                            }}
                        >
                            My Projects
                        </Link>
                    </div>
                    <div className="navigation-links">
                        <Link
                            href={`/Resume.pdf`}
                            download={`/Resume.pdf`}
                            onClick={() => {
                                setMobileMenuOpen(false);
                            }}
                            target="_blank"
                        >
                            Download CV
                        </Link>
                    </div>
                    <div className="navigation-links last-link">
                        <Link
                            href={`/${localActive}/contact-me`}
                            onClick={() => {
                                setMobileMenuOpen(false);
                            }}
                        >
                            Contact Me
                        </Link>
                    </div>
                </aside>
            ) : (
                ""
            )}

            <header className="header">
                <div className="container">
                    <div className="logo-container">
                        <div className="hello-world">Hello World!</div>
                    </div>
                    <div className="navigation-through-site">
                        <div className="navigation-links">
                            <Link href={"/"}>Home</Link>
                        </div>
                        <div className="navigation-links">
                            <Link href={`/${localActive}/projects`}>My Projects</Link>
                        </div>
                        <div className="navigation-links">
                            <Link
                                href={`/Resume.pdf`}
                                target="_blank"
                            >
                                Download CV
                            </Link>
                        </div>
                        <div className="navigation-links last-link">
                            <Link
                                href={`/${localActive}/contact-me`}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                }}
                            >
                                Contact Me
                            </Link>
                        </div>
                        <div
                            className="hamburger-menu"
                            onClick={() => {
                                setMobileMenuOpen(true);
                            }}
                        >
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
