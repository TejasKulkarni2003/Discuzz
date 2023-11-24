import { configureStore } from "@reduxjs/toolkit";
import { likePostReducer } from "./Reducers/postReducer";
import {  getAllPostsReducer, getAllUsersReducer, userProfileReducer, userReducer } from "./Reducers/userReducer";

const store = configureStore({
    reducer:{
        user: userReducer,
        allPosts: getAllPostsReducer,
        allUsers: getAllUsersReducer,
        like: likePostReducer,
        userProfile: userProfileReducer,
    }
})

export default store;