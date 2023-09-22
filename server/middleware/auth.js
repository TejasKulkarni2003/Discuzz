const asyncError = require("./asyncError");
const User = require("../models/userSchema")
const jwt = require("jsonwebtoken")
exports.isLoggedIn = asyncError( async (req, res, next) => {
    const {token} = req.cookies
    if(!token){
        return res.status(401).json({
            message: "Please login First",
        })
    }

    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(decodedToken._id);
    next()
})