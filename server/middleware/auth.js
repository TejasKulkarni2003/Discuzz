const User = require("../models/userSchema");
const asyncError = require("./asyncError")
const jwt = require("jsonwebtoken")

exports.isAuthenticatedUser = asyncError(async (req, res, next) =>{
    const {token} = req.cookies;
    // console.log(token);
    if(!token){
        return next(res.status(500).json({message: "Please Login First"}));
    }

    const data = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(data.id);

    next();
})