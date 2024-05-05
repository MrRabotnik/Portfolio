"use client";

import { useLocale } from "next-intl";
import "./page.scss";
import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProject = () => {
    const localACtive = useLocale();

    const [name, setName] = useState("");
    const [creationTime, setCreationTime] = useState("");
    const [previewImage, setPreviewImage] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [category, setCategory] = useState("");
    const [link, setLink] = useState("");

    const changePreviewImage = (e: any) => {
        const fs: any = new FileReader();
        fs.readAsDataURL(e.target.files[0]);
        fs.onload = () => {
            setPreviewImage(fs.result);
        };
    };

    const addProject = () => {
        const body = {
            name,
            creationTime,
            previewImage,
            technologies,
            category,
            link,
        };

        axios
            .post(`/${localACtive}/api/project/new`, JSON.stringify(body))
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
            })
            .catch((error) => {
                toast(error, {
                    type: "error",
                });
            });
    };

    return (
        <section className="add-project-section">
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
            <div className="input-container">
                <label htmlFor="Name">Name</label>
                <input
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    placeholder="..."
                    title="Something"
                    type="text"
                    id="Name"
                />
            </div>

            <div className="input-container">
                <label htmlFor="Creation Time">Creation Time</label>
                <input
                    onChange={(e) => {
                        setCreationTime(e.target.value);
                    }}
                    placeholder="..."
                    title="Something"
                    type="text"
                    id="Creation Time"
                />
            </div>

            <div className="input-container">
                <label htmlFor="Preview Image">Preview Image</label>

                <input
                    onChange={(e) => {
                        changePreviewImage(e);
                    }}
                    placeholder="..."
                    title="Something"
                    type="file"
                    id="Preview Image"
                />
            </div>

            <div className="input-container">
                <label htmlFor="Technologies Used">Technologies Used</label>

                <input
                    onChange={(e) => {
                        setTechnologies(e.target.value);
                    }}
                    placeholder="..."
                    title="Something"
                    type="text"
                    id="Technologies Used"
                />
            </div>

            <div className="input-container">
                <label htmlFor="Category">Category</label>

                <input
                    onChange={(e) => {
                        setCategory(e.target.value);
                    }}
                    placeholder="..."
                    title="Something"
                    type="text"
                    id="Category"
                />
            </div>

            <div className="input-container">
                <label htmlFor="Link">Link</label>

                <input
                    onChange={(e) => {
                        setLink(e.target.value);
                    }}
                    placeholder="..."
                    title="Something"
                    type="text"
                    id="Link"
                />
            </div>

            <div className="input-container">
                <button onClick={addProject}>Submit</button>
            </div>
        </section>
    );
};

export default AddProject;
