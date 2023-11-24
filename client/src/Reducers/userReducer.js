import { createReducer } from "@reduxjs/toolkit"
const initialState = {}

export const userReducer = createReducer(initialState, {
    LoginRequest: (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    RegisterRequest: (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    RegisterSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    RegisterFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },


    LoadRequest: (state) => {
        state.loading = true;
        state.isAuthenticated = false;
    },
    LoadSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoadFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

})

export const userProfileReducer = createReducer(initialState, {
    LoadUserRequest: (state) => {
        state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false;
        state.userProfile = action.payload;
    },
    LoadUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
})

export const getAllPostsReducer = createReducer(initialState, {
    getAllPostsRequest: (state) => {
        state.loading = true;
    },
    getAllPostsSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    },
    getAllPostsFail: (state, action) => {
        state.loading = false;
        state.errors = action.payload;
    },
    clearErrors: (state) => {
        state.error = null
    }
})

export const getAllUsersReducer = createReducer(initialState, {
    getAllUsersRequest: (state) => {
        state.loading = true;
    },
    getAllUsersSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload;
    },
    getAllUsersFail: (state, action) => {
        state.loading = false;
        state.errors = action.payload;
    },
    clearErrors: (state) => {
        state.error = null
    }
})
