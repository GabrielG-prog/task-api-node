const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashed]);
  res.status(201).json({ message: "Utilisateur créé" });
};

exports.signin = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [req.body.email]);
  const user = rows[0];
  if (!user) return res.status(401).json({ message: "Email ou mot de passe invalide" });

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(401).json({ message: "Email ou mot de passe invalide" });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};
