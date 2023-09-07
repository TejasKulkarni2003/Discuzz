const express = require("express");
const app = express();
const postRouting = require("./routes/postRoutes")

app.use("/api/v1", postRouting)


module.exports = app;