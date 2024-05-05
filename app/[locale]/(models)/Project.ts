import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    name: String,
    creationTime: String,
    previewImage: String,
    technologies: String,
    category: String,
    link: String,
    active: Boolean,
});

const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
export default Project;
