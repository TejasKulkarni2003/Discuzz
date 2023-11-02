const express = require("express");
const { createPost, getPosts, likeUnlikePost, deletePost, addToFavourites } = require("../controllers/postController");
const router = express.Router();
const {isAuthenticatedUser} = require("../middleware/auth")

// create post
router.route("/post/new").post(isAuthenticatedUser, createPost);

//get all posts
router.route("/posts").get(isAuthenticatedUser, getPosts);

//like Unlike Post  &  delete Post
router.route("/post/:id").get(isAuthenticatedUser, likeUnlikePost).delete(isAuthenticatedUser, deletePost);

//add and remove from favourites
router.route("/post/addtofav/:id").get(isAuthenticatedUser, addToFavourites);

module.exports = router;


