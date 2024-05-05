"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import "./page.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [validation, setValidation] = useState(false);
    const localActive = useLocale();

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        // TODO add token validation from local storage, also check if DB already has that user or not
        if (!validation) return;
        e.preventDefault();
        try {
            const body = {
                email,
                password,
            };
            const res = await axios
                .post(`/${localActive}/api/admin/login`, JSON.stringify(body))
                .then((data) => {
                    if (data.data.success) {
                        localStorage.setItem("token", data.data.token);
                        router.push(`/${localActive}/dashboard/add-project`);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        } catch (error) {
            console.error(error);
            setError("Something went wrong");
        }
    };

    useEffect(() => {
        let emailValid = false;
        let passValid = false;
        const regex: any =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(email)) {
            emailValid = true;
        }
        if (Number(password.length) > 7) {
            passValid = true;
        }

        if (emailValid && passValid) {
            setValidation(true);
        } else {
            setValidation(false);
        }
    }, [email, password]);

    return (
        <section className="admin-login-section">
            <div className="container">
                <div className="modal">
                    <form
                        onSubmit={handleSubmit}
                        className="form"
                    >
                        <p>Email</p>
                        <input
                            className="input"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p>Password</p>
                        <input
                            className="input"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {validation ? (
                            <button
                                type="submit"
                                className={"button"}
                            >
                                Log in
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled
                                className={"button disabled"}
                            >
                                Log in
                            </button>
                        )}
                    </form>
                    {error && <p className="error">{error}</p>}
                </div>
            </div>
        </section>
    );
}
