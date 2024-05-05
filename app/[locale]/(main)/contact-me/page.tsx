"use client";

import axios from "axios";
import { useLocale } from "next-intl";
import { useState } from "react";
import "./page.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
    const localActive = useLocale();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [pending, setPending] = useState(false);

    const [validName, setValidName] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validSubject, setValidSubject] = useState(false);
    const [validMessage, setValidMessage] = useState(false);

    const checkName = (val: string) => {
        if (val.length === 0) {
            setValidName(false);
        } else {
            setValidName(true);
        }
    };

    const checkEmail = (val: string) => {
        const regex: any =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(val)) {
            setValidEmail(true);
        } else {
            setValidEmail(false);
        }
    };

    const checkSubject = (val: string) => {
        if (val.length === 0) {
            setValidSubject(false);
        } else {
            setValidSubject(true);
        }
    };

    const checkMessage = (val: string) => {
        if (val.length === 0) {
            setValidMessage(false);
        } else {
            setValidMessage(true);
        }
    };

    const sendMail = () => {
        if (!validName) {
            toast("Name is not valid", {
                type: "warning",
            });
            return;
        } else if (!validEmail) {
            toast("Email is not valid", {
                type: "warning",
            });
            return;
        } else if (!validSubject) {
            toast("Subject is not valid", {
                type: "warning",
            });
            return;
        } else if (!validMessage) {
            toast("Message is not valid", {
                type: "warning",
            });
            return;
        }

        setPending(true);

        const body = {
            name,
            email,
            subject,
            message,
        };

        axios
            .post(`/${localActive}/api/mail/contact-me`, JSON.stringify(body))
            .then((res) => {
                if (res.data.success) {
                    toast(res.data.message, {
                        type: "success",
                    });
                } else {
                    toast(res.data.message, {
                        type: "error",
                    });
                }
                setPending(true);
            })
            .catch((error) => {
                toast(error, {
                    type: "error",
                });
            });
    };
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
                                        checkName(e.target.value);
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
                                        checkEmail(e.target.value);
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
                                        checkSubject(e.target.value);
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
                                        checkMessage(e.target.value);
                                    }}
                                ></textarea>
                            </div>
                            <div className="submit-mail-btn-container">
                                <button
                                    onClick={sendMail}
                                    disabled={pending}
                                >
                                    Send Mail
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactMe;
