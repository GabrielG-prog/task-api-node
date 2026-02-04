const db = require("../config/db");
const Task = require("../models/taskModel");

exports.getTasks = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;

    const [rows] = await db.query(
      "SELECT * FROM tasks LIMIT ? OFFSET ?",
      [parseInt(limit), offset]
    );

    res.json({
      data: rows,
      meta: {
        page: parseInt(page),
        limit: parseInt(limit)
      }
    });
  } catch (err) {
    next(err);
  }
};


exports.getTask = async (req, res, next) => {
  try {
    const task = await Task.getTaskById(req.params.id);
    if (!task) return res.status(404).json({ message: "Tâche non trouvée" });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    if (!req.body.title)
      return res.status(400).json({ message: "Le titre est requis" });

    const newTask = await Task.createTask(req.body.title);
    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const updated = await Task.updateTask(
      req.params.id,
      req.body.title,
      req.body.completed
    );
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.patchTask = async (req, res, next) => {
  try {
    const updated = await Task.patchTask(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    await Task.deleteTask(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
