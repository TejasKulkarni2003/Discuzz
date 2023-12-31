const express = require("express");
const app = express();
const postRouting = require("./routes/postRoutes")
const userRouting = require("./routes/userRoutes")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}))

// app.use("/api/v1", postRouting)
app.use("/api/v1", userRouting)
app.use("/api/v1", postRouting)


module.exports = app;