const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/userControllers");


// registration route
router.post("/user/register",controllers.userpost);
// get all user data route
router.get("/user/getAlluser",controllers.getUsers);
// get singleuser data  route
router.get("/user/singleuser/:id",controllers.getSingleuser);
// delete route
router.delete("/user/deleteuser/:id",controllers.deleteuser);
// update route
router.put("/user/updateuser/:id",controllers.updateUser);
// login route
router.post("/user/login", controllers.loginUser);

module.exports = router;


