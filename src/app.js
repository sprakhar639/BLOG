const express = require("express");
const blogRoutes = require("./routes/blog.routes");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const { errorHandler } = require("./middleware/error.middleware");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/user", userRoutes);
app.use(errorHandler);

module.exports = app;
