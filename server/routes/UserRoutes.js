const express = require("express");
const router = express.Router();
const {register, updateUser, deleteuser, getSingleuser, getAllUsers, loginUser, logout, changePassword} = require("../controllers/userController");
const {isAuthenticatedUser} = require("../middleware/auth")

// registration route
router.route("/register").post(register);

// get all user data route
router.route("/user/getallusers").get(getAllUsers);

// get singleuser data  route
router.route("/user/details/:id").get(getSingleuser);

// delete route
router.route("/user/deleteuser/:id").delete(deleteuser);

// update route
router.route("/user/updateuser/:id").put( updateUser);

// login route
router.route("/user/login").post(loginUser);

//logout
router.route("/logout").get(logout);

//change Password
router.route("/changepassword").put(isAuthenticatedUser, changePassword)

module.exports = router;


