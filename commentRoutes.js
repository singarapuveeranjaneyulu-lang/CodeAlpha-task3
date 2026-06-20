const router = require("express").Router();

const controller =
require("../controllers/commentController");

router.post("/", controller.addComment);

router.get("/:taskId",
controller.getComments);

module.exports = router;