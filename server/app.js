// require("dotenv").config();
// const cors = require("cors");

// const express = require("express");
// const app = express();
// const user = require("./routes/userRoutes");
// const post = require("./routes/postRoutes.js")

// app.use(cors());
// app.use(express.json());

// //Routes
// app.use("/api/v1", user);
// app.use("/api/v1", post);

// // get response
// // app.get("/",(req,res)=>{
// //     res.status(200).json("server start");
// // });


// // server start
// module.exports = app;

const express = require("express");
const app = express();
const postRouting = require("./routes/postRoutes")
const userRouting = require("./routes/userRoutes")

app.use(express.json())

// app.use("/api/v1", postRouting)
app.use("/api/v1", userRouting)


module.exports = app;