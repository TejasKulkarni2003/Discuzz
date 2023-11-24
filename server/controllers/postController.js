const Post = require("../models/postSchema")
const User=require("../models/userSchema")
const asyncError = require("../middleware/asyncError")
// const {} = require("../middleware/auth")

exports.createPost = asyncError (async(req, res, next) => {

    try {
        const {title, content, category} = req.body
        if (!title  ||  !content  ||  !category ) {
            return res.status(400).json({ error: "All Input Is required" });
        }

        const newPostData = {
            title,
            content,
            category,
            creator: req.user._id,
        }

        const newPost = await Post.create(newPostData)

        const user = await User.findById(req.user._id)

        user.posts.push(newPost._id)

        await user.save()

        res.status(200).json({success: true, newPost})

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
})

exports.getPosts = asyncError ( async(req, res, next) => {
    try {
        const posts = await Post.find().populate("creator likes comments.user");
        res.status(200).json({success: true, posts})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
})

exports.likeUnlikePost = asyncError( async(req, res, next) => {
    try {
        const currentPost = await Post.findById(req.params.id)
        // const currentUser = await User.findById(req.user._id)

        if(!currentPost){
            return res.status(404).json({success: false, message: "Post not found"})
        }

        if(currentPost.likes.includes(req.user._id)){
            const index = currentPost.likes.indexOf(req.user._id)
            currentPost.likes.splice(index, 1)

            await currentPost.save()

            return res.status(200).json({success: false, message: "Post Unliked"})

        }

        currentPost.likes.push(req.user._id)

        await currentPost.save()

        return res.status(200).json({success: false, message: "Post Liked"})

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
})

exports.deletePost = asyncError( async(req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
        const user = await User.findById(req.user._id)

        if(!post){
            return res.status(404).json({success: false, message: "Post not found"})
        }

        if(post.creator.toString() !== req.user._id.toString()){
            return res.status(401).json({success: false, message: "Not Authorised"})
        }

        await Post.findByIdAndDelete(req.params.id)
        // console.log(user)
        const index = user.posts.indexOf(req.params.id)
        
        user.posts.splice(index, 1)

        await user.save()

        res.status(200).json({success: true, message: "Post Deleted Successfully"})

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
})

exports.addToFavourites = asyncError( async(req, res, next) => {
    
    try {
        const user = await User.findById(req.user._id)

        if(!user){
            return res.status(404).json({success: false, message: "User not found"})
        }

        if(user.favouritePosts.includes(req.params.id)){
            const index = user.favouritePosts.indexOf(req.params.id)
            user.favouritePosts.splice(index, 1)

            await user.save()
            return res.status(200).json({success: false, message: "Post removed from Favourites"})
        }

        user.favouritePosts.push(req.params.id)
        await user.save()

        return res.status(200).json({success: false, message: "Post added to Favourites"})

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
})