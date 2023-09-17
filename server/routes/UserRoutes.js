const express = require("express");
const router = express.Router();
const {register, updateUser, deleteuser, getSingleuser, getAllUsers, loginUser, logout} = require("../controllers/userController");


// registration route
router.route("/user/register").post(register);

// get all user data route
router.route("/user/getallusers").get(getAllUsers);

// get singleuser data  route
router.route("/user/:id").get(getSingleuser);

// delete route
router.route("/user/deleteuser/:id").delete(deleteuser);

// update route
router.route("/user/updateuser/:id").put(updateUser);

// login route
router.route("/user/login").post(loginUser);

//logout
router.route("/user/logout").get(logout);

module.exports = router;


