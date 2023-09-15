const users = require("../Models/usersSchema");
const moment = require("moment")
const jwt = require("jsonwebtoken");



// create user
exports.userpost = async (req, res) => {
    const { firstname, email, mobile, gender, status, password} = req.body;

    if (!firstname || !email || !mobile || !gender || !status || !password ) {
        res.status(400).json({ error: "All Input Is required" });
    }
    try {
        const preuser = await users.findOne({ email: email });
        if (preuser) {
            res.status(400).json({ error: "This user already exist in our databse" });
        }else{
            const dateCreate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss"); 

            const userData = new users({
                firstname, email, mobile, gender, status , password,  datecreated:dateCreate
            });

            await userData.save();
            res.status(200).json(userData);
        } 
    } catch (error) {
        res.status(400).json(error); 
        console.log("catch block error")
    }
}


// Login

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }
  
    try {
      const user = await users.findOne({ email: email });
  
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
      if (password !== user.password) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
  
  
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      res.status(500).json(error);
      console.log("catch block error");
    }
  };
  
  


// get all users

exports.getUsers = async(req,res)=>{
 
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

    try {

    
        const skip = (page - 1) *ITEM_PER_PAGE  

       
        const count = await users.countDocuments(query); 

        const usersData = await users.find()
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
        res.status(400).json(error);
        console.log("catch block error")
    }


}


// get single user
exports.getSingleuser = async(req,res)=>{
    const {id} = req.params;

    try {
        const singleUserData = await users.findOne({_id:id});

        res.status(200).json(singleUserData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error")
    }
}


// delete user
exports.deleteuser = async(req,res)=>{
    const {id} = req.params;

    try {
        const deleteUserData = await users.findByIdAndDelete({_id:id});

        res.status(200).json(deleteUserData);
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error")
    }
}

// update user

exports.updateUser = async(req,res)=>{
    const {id} = req.params;
    const { firstname, email, mobile, gender, status, password } = req.body;

    try {
        const dateUpdate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

        const updateUserdata = await users.findByIdAndUpdate({_id:id},{
            firstname, email, mobile, gender, status ,password,  dateUpdated:dateUpdate
        },{new:true});

        await updateUserdata.save();

        res.status(200).json(updateUserdata)
    } catch (error) {
        res.status(400).json(error);
        console.log("catch block error")
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////








