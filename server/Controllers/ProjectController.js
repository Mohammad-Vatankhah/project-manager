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
      res.status(200).json("Project updated!")
    } else {
        res.status(403).json("Action forbidden.")
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
