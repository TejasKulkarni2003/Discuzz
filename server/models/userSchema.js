const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
// create users scehma

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error("not valid Email")
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    gender:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active","In-Active"],
        default:"Active"
    },
    password:{
      type:String,
      reqiured:true,
      unique:true,
      minlength:6,
      maxlength:10,
      select: false,
    },
    posts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    ],
    favouritePosts:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now,
    },
    dateUpdated:Date,
});

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

// JWT Token Creation
userSchema.methods.getJWTToken = function(){

    //creating a secret token and giving it expiry so that it will sign out after perticular time
    return jwt.sign({id:this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

//Password Check
userSchema.methods.comparePasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
};


// model define
const User = new mongoose.model("User",userSchema);
module.exports = User;