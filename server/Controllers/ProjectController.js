import ProjectModel from "../Models/projectModel.js";

// create new project
export const createProject = async (req, res) => {
  const newProject = new ProjectModel(req.body);
  try {
    await newProject.save();
    res.status(200).json("Post created!");
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
      res.status(404).json("No such post exists");
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