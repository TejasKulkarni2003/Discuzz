const User = require("../models/userSchema");
const asyncError = require("./asyncError")
const jwt = require("jsonwebtoken")

exports.isLogged = asyncError( async(req, res, next) => {
    const {token} = req.cookies;

    if(!token){
        return res.status(401).json({
            success: false,
            message: "Please Login First",
        })
    }
    const data = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(data.id);

    next()
})