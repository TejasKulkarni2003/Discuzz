const express = require("express");
const app = express();
const postRouting = require("./routes/postRoutes")
const userRouting = require("./routes/userRoutes")
const cookieParser = require("cookie-parser")

app.use(express.json())
app.use(cookieParser)

// app.use("/api/v1", postRouting)
app.use("/api/v1", userRouting)


module.exports = app;