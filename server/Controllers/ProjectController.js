import mongoose from "mongoose";
import ProjectModel from "../Models/projectModel.js";
import UserModel from "../Models/userModel.js";

// create new project
export const createProject = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.publisher);
    if (user.companies.includes(req.body.company) || req.body.company === "") {
      const newProject = new ProjectModel(req.body);
      await newProject.save();
      res.status(200).json("Project created!");
    } else {
      res.status(403).json("You can only add project to  your own company!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get a project
export const getProject = async (req, res) => {
  const projectId = req.params.id;
  try {
    const project = await ProjectModel.findById(projectId);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json("No such project exists");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update a project
export const updateProject = async (req, res) => {
  const projectId = req.params.id;
  const { currentUserId } = req.body;
  try {
    const project = await ProjectModel.findById(projectId);
    if (project.publisher === currentUserId) {
      await project.updateOne({ $set: req.body });
      res.status(200).json("Project updated!");
    } else {
      res.status(403).json("Action forbidden.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete a project
export const deleteProject = async (req, res) => {
  const projectId = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;
  try {
    const project = await ProjectModel.findById(projectId);
    if (project.publisher === currentUserId || currentUserAdminStatus) {
      await project.deleteOne();
      res.status(200).json("Project deleted!");
    } else {
      res.status(403).json("Action forbidden.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// like/dislike a project
export const likeProject = async (req, res) => {
  const projectId = req.params.id;
  const { currentUserId } = req.body;
  try {
    const project = await ProjectModel.findById(projectId);
    if (!project.likes.includes(currentUserId)) {
      await project.updateOne({ $push: { likes: currentUserId } });
      res.status(200).json("Project liked!");
    } else {
      await project.updateOne({ $pull: { likes: currentUserId } });
      res.status(200).json("Project disliked!");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add process
export const addProcess = async (req, res) => {
  const projectId = req.params.id;
  const { currentUserId, image, desc } = req.body;
  try {
    const project = await ProjectModel.findById(projectId);
    if (project.employees.includes(currentUserId)) {
      await project.updateOne({
        $push: {
          process: {
            employee: currentUserId,
            image: image,
            desc: desc,
          },
        },
      });
      res.status(200).json("Process adeed!");
    } else {
      res.status(403).json("Action forbidden");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete process
export const deleteProcess = async (req, res) => {
  const projectId = req.params.id;
  const { currentUserId, processId } = req.body;

  try {
    const project = await ProjectModel.findById(projectId);
    let process = null;
    project.process.map((p) => {
      if (p.id === processId) {
        process = p;
      }
    });
    if (
      currentUserId === project.publisher ||
      currentUserId === process.employee
    ) {
      await project.updateOne({ $pull: { process: process } });
      res.status(200).json("Process deleted!");
    } else {
      res.status(403).json("You cannot delete others' process.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// add comment
export const addComment = async (req, res) => {
  const projectId = req.params.id;
  const { userId, desc } = req.body;
  try {
    if (userId !== undefined && desc.length !== 0) {
      const project = await ProjectModel.findById(projectId);
      await project.updateOne({
        $push: {
          comments: {
            userId: userId,
            desc: desc,
          },
        },
      });
      res.status(200).json("Comment added!");
    } else {
      res.status(403).json("Comment should have a description.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete comment
export const deleteComment = async (req, res) => {
  const projectId = req.params.id;
  const { currentUserId, commentId } = req.body;
  try {
    const project = await ProjectModel.findById(projectId);
    let comment = null;
    project.comments.map((c) => {
      if (c.id === commentId) {
        comment = c;
      }
    });
    if (currentUserId === comment.userId) {
      await project.updateOne({ $pull: { comments: comment } });
      res.status(200).json("Comment deleted!");
    } else {
      res.status(403).json("You cannot delete others' comments.");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get timeline posts
export const getTimeLinePosts = async (req, res) => {
  const userId = req.params.id;
  try {
    const currentUserProjects = await ProjectModel.find({ publisher: userId });
    const followingProjects = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "projects",
          localField: "followings",
          foreignField: "employees",
          as: "followingProjects",
        },
      },
      {
        $project: {
          followingProjects: 1,
          _id: 0,
        },
      },
    ]);

    // array of all projects (current user and his/her followings)
    const projects = currentUserProjects.concat(
      followingProjects[0].followingProjects
    );
    const uniqueProjects = [];
    // remove duplicate projects
    projects.map((element, index) => {
      let id = element._id.toString();
      if (uniqueProjects.includes(id)) {
        projects.splice(index, 1);
      }
      uniqueProjects.push(id);
    });
    res.status(200).json(
      projects.sort((a, b) => {
        return b.createdAt - a.createdAt;
      })
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
