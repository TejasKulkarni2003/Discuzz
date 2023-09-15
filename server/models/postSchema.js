const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title: String,
    content: String,
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    // categories:[
    //     {category: String}
    // ],
    category: String,
    likes:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],

    comments:[

        {
            user:{
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            comment:{
                type: String,
                required: true,
            }
            
        }
    ],

    reports: Int,

    createdAt:{
        type: Date,
        default: Date.now,
    }
})