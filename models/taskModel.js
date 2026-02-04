const db = require("../config/db");

exports.getAllTasks = async () => {
  const [rows] = await db.query("SELECT * FROM tasks");
  return rows;
};

exports.getTaskById = async (id) => {
  const [rows] = await db.query("SELECT * FROM tasks WHERE id = ?", [id]);
  return rows[0];
};

exports.createTask = async (title) => {
  const [result] = await db.query("INSERT INTO tasks (title) VALUES (?)", [title]);
  return { id: result.insertId, title };
};

exports.updateTask = async (id, title, completed) => {
  await db.query(
    "UPDATE tasks SET title = ?, completed = ? WHERE id = ?",
    [title, completed, id]
  );
  return this.getTaskById(id);
};

exports.patchTask = async (id, fields) => {
  const updates = [];
  const values = [];

  Object.keys(fields).forEach((key) => {
    updates.push(`${key} = ?`);
    values.push(fields[key]);
  });

  values.push(id);

  await db.query(`UPDATE tasks SET ${updates.join(", ")} WHERE id = ?`, values);
  return this.getTaskById(id);
};

exports.deleteTask = async (id) => {
  await db.query("DELETE FROM tasks WHERE id = ?", [id]);
};
