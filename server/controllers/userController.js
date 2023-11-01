const User = require("../models/userSchema");
const asyncError = require("../middleware/asyncError");
const sendToken = require("../utils/sendJWTToken");


// create user
exports.register = asyncError(async (req, res) => {
    const { firstname, email, mobile, gender, status, password} = req.body;
    console.log(firstname);
    if (!firstname || !email || !mobile || !gender || !status || !password ) {
        return res.status(400).json({ error: "All Input Is required" });
    }
    
    const preuser = await User.findOne({ email: email })
    if (preuser) {
        return res.status(400).json({ error: "This user already exist in our databse" });
    } 

    const user = await User.create({
        firstname, email, mobile, gender, status , password
    });
    sendToken(user, 201, res);

});


// Login
exports.loginUser = asyncError(async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const isPasswordMatch = await user.comparePasswords(password);

        if (!isPasswordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }


        sendToken(user, 200, res);
    } catch (error) {
        res.status(501).json({ error: error });
    }
    
    
});

//logout
exports.logout = asyncError((req, res, next) => {
    try {
        console.log(res.cookie)
        res.cookie('token', null, {
            expires: new Date(Date.now()),
            httpOnly: true
        })
    
        res.status(200).json({
            success: true,
            message: "Logged Out"
        })
    } catch (error) {
        res.status(501).json({ error: error });
    }
    
})

// get all User
exports.getAllUsers = asyncError(async(req,res)=>{
    try {
        const search = req.query.search || "";
        const status = req.query.status || "";
        const gender = req.query.gender || "";
        const sort = req.query.sort || "";
        const page = req.query.page || 1;
        const ITEM_PER_PAGE = req.query.iteams || 4

        const query = {
            firstname:{$regex:search,$options:"i"}
        }

        if(status !== "All"){
            query.status = status
        }

        if(gender !== "All"){
            query.gender = gender
        }
        const skip = (page - 1) *ITEM_PER_PAGE  
        const count = await User.countDocuments(query); 

        const usersData = await User.find()
        .sort({datecreated:sort == "new" ? -1 :1})
        .limit(ITEM_PER_PAGE)
        .skip(skip)   

        const pageCount = Math.ceil(count/ITEM_PER_PAGE);  

        res.status(200).json({
            pagination:{
                count:pageCount
            },
            usersData
        }); 
    } catch (error) {
        res.status(501).json({ error: error });
    }  

})


// get single user
exports.getSingleuser = asyncError(async(req,res)=>{
    try {
        const {id} = req.params;

        const singleUserData = await User.findOne({_id:id});
        res.status(200).json(singleUserData);
    } catch (error) {
        res.status(501).json({ error: error });
    }
    
})


// delete user
exports.deleteuser = asyncError(async(req,res)=>{
    const {id} = req.params;

    const deleteUserData = await User.findByIdAndDelete({_id:id});
    res.status(200).json({
        success : true,
        deleteUserData
    });
    
})

// update user
exports.updateUser = asyncError(async(req,res)=>{
    const {id} = req.params;
    const { firstname, email, mobile, gender, status } = req.body;

    // const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

    const updateUserdata = await User.findByIdAndUpdate({_id:id},{
        firstname, email, mobile, gender, status
    },{new:true, runValidators: true, useFindAndModify: false,});

    await updateUserdata.save();

    res.status(200).json(updateUserdata)
    
})

exports.changePassword = asyncError( async(req, res, next) => {
    
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatch = await user.comparePasswords(req.body.oldPassword);

    if(!isPasswordMatch){
        return next( res.status(401).json({meggsge: "Incorrect Password"}));
    }

    if(req.body.newPassword !== req.body.confirmPassword){
        return next( res.status(404).json({meggsge: "Password not Matched"}))
    }

    user.password = req.body.newPassword;
    await user.save({validateBeforeSave: false});

    res.status(200).json({
        success: true,
        user
    })
})