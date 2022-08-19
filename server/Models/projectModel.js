import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema(
  {
    publisher: {
      type: String,
      requred: true,
    },
    image: String,
    desc: String,
    likes: [],
    employess: [],
    process: [],
    comments: [],
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.model("Projects", ProjectSchema);
export default ProjectModel;
