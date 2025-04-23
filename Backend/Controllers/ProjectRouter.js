const Project = require("../models/Project");
const Photographer = require("../models/Photographer");
const { Router } = require("express");

const projectRouter = Router();

projectRouter.post("/project", async (req, res) => {
  try {
    const { photographer, title, description, imageUrl } = req.body;

    // Check if all required fields are present
    if (!photographer || !imageUrl) {
      return res.status(400).json({ message: "Photographer and imageUrl are required." });
    }

    // Verify photographer exists
    const existingPhotographer = await Photographer.findById(photographer);
    if (!existingPhotographer) {
      return res.status(404).json({ message: "Photographer not found." });
    }

    // Create new project
    const newProject = new Project({
      photographer,
      title,
      description,
      imageUrl,
    });

    await newProject.save();

    res.status(201).json({ message: "Project uploaded successfully!", data: newProject });
  } catch (err) {
    res.status(500).json({ message: "Error uploading project", error: err.message });
  }
});

module.exports = projectRouter;
