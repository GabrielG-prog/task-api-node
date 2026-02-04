require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

const errorHandler = require("./middleware/errorMiddleware");
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur sur port ${PORT}`));
