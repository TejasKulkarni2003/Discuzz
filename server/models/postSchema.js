const mongoose = require("mongoose")

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    // categories:[
    //     {category: String}
    // ],
    category: {
        type: String,
        required: true
    },
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

    // reports: Int,

    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model("Post", PostSchema);