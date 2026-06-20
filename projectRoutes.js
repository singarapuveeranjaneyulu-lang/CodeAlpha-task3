const router = require("express").Router();

const auth = require("../middleware/authMiddleware");

const projectController =
require("../controllers/projectController");

router.post(
  "/",
  auth,
  projectController.createProject
);

router.get(
  "/",
  auth,
  projectController.getProjects
);

module.exports = router;