import mongoose from "mongoose";
const ProcessSchema = mongoose.Schema(
  {
    employee: {
      type: String,
      required: true,
    },
    image: String,
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectSchema = mongoose.Schema(
  {
    publisher: {
      type: String,
      requred: true,
    },
    name: String,
    image: String,
    desc: String,
    likes: [String],
    employees: {
      type: [String],
      required: true,
    },
    process: [ProcessSchema],
    comments: [CommentSchema],
    company: String,
  },
  {
    timestamps: true,
  }
);

const ProjectModel = mongoose.model("Projects", ProjectSchema);
export default ProjectModel;
