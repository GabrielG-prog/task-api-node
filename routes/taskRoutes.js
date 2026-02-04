const express = require("express");
const router = express.Router();
const controller = require("../controllers/taskController");
const { validateBody } = require("../middleware/validate");
const { createTaskSchema, updateTaskSchema } = require("../validation/task");
const authMiddleware = require("../middleware/auth");

router.get("/", controller.getTasks);
router.get("/:id", controller.getTask);

router.post("/", authMiddleware, validateBody(createTaskSchema), controller.createTask);
router.put("/:id", authMiddleware, validateBody(updateTaskSchema), controller.updateTask);
router.patch("/:id", authMiddleware, validateBody(updateTaskSchema), controller.patchTask);
router.delete("/:id", authMiddleware, controller.deleteTask);

module.exports = router;
