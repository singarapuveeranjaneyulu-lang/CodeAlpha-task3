const router = require("express").Router();

const controller =
require("../controllers/taskController");

router.post("/", controller.createTask);

router.get("/", controller.getTasks);

router.put("/:id", controller.updateTask);

module.exports = router;