"use client";

import axios from "axios";
import { useLocale } from "next-intl";
import { useState } from "react";
import "./page.scss";

const ContactMe = () => {
    const localActive = useLocale();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const sendMail = () => {
        const body = {
            name,
            email,
            subject,
            message,
        };

        axios
            .post(`/${localActive}/api/mail/contact-me`, JSON.stringify(body))
            .then((res) => {
                console.log(res.data);
            })
            .catch((er) => {
                console.log(er);
            });
    };
    return (
        <div className="contact-me-section">
            <div className="container">
                <div className="contact-me-modal">
                    <div className="form">
                        <div className="label-input-container">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                id="name"
                            />
                        </div>
                        <div className="label-input-container">
                            <label htmlFor="Email">Email</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                id="Email"
                            />
                        </div>
                        <div className="label-input-container">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setSubject(e.target.value);
                                }}
                                id="subject"
                            />
                        </div>
                        <div className="label-input-container">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                            ></textarea>
                        </div>
                        <div className="submit-mail-btn-container">
                            <button onClick={sendMail}>Send Mail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
