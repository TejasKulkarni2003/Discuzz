// import { createReducer } from "@reduxjs/toolkit"
// const initialState = {}

// export const userReducer = createReducer(initialState, {
//     LoginRequest: (state) => {
//         state.loading = true;
//         state.isAuthenticated = false;
//     },
//     LoginSuccess: (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//     },
//     LoginFailure: (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.isAuthenticated = false;
//     },


//     RegisterRequest: (state) => {
//         state.loading = true;
//         state.isAuthenticated = false;
//     },
//     RegisterSuccess: (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//     },
//     RegisterFailure: (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.isAuthenticated = false;
//     },


//     LoadRequest: (state) => {
//         state.loading = true;
//         state.isAuthenticated = false;
//     },
//     LoadSuccess: (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//     },
//     LoadFailure: (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.isAuthenticated = false;
//     },

// })

// export const userProfileReducer = createReducer(initialState, {
//     LoadUserRequest: (state) => {
//         state.loading = true;
//     },
//     LoadUserSuccess: (state, action) => {
//         state.loading = false;
//         state.userProfile = action.payload;
//     },
//     LoadUserFailure: (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//     },
// })

// export const getAllPostsReducer = createReducer(initialState, {
//     getAllPostsRequest: (state) => {
//         state.loading = true;
//     },
//     getAllPostsSuccess: (state, action) => {
//         state.loading = false;
//         state.posts = action.payload;
//     },
//     getAllPostsFail: (state, action) => {
//         state.loading = false;
//         state.errors = action.payload;
//     },
//     clearErrors: (state) => {
//         state.error = null
//     }
// })

// export const getAllUsersReducer = createReducer(initialState, {
//     getAllUsersRequest: (state) => {
//         state.loading = true;
//     },
//     getAllUsersSuccess: (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//     },
//     getAllUsersFail: (state, action) => {
//         state.loading = false;
//         state.errors = action.payload;
//     },
//     clearErrors: (state) => {
//         state.error = null
//     }
// })


import { ClearMessages } from "../Constants/postConstants";
import {USER_LOGIN_REQUEST, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS,
    USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST,
    LOAD_SUCCESS, LOAD_FAIL, LOAD_REQUEST,
    LOGOUT_SUCCESS, LOGOUT_FAIL,
    UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_RESET, UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_RESET, UPDATE_PASSWORD_FAIL,
    ClearErrors,
    GET_ALL_POST_REQUEST,
    GET_ALL_POST_SUCCESS,
    GET_ALL_POST_FAIL,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_REQUEST,
    USER_PROFILE_FAIL,
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL} from "../Constants/userConstants"

export const userReducer = (state = {user: {}}, action) => {
    switch(action.type){
        case USER_LOGIN_REQUEST:
        case USER_REGISTER_REQUEST:
        case LOAD_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };

        case USER_LOGIN_SUCCESS:
        case LOAD_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case USER_REGISTER_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case USER_LOGIN_FAIL:
        case USER_REGISTER_FAIL:
            return{
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };

        case LOAD_FAIL:
            return{
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            }
        case LOGOUT_SUCCESS:
            return{
                loading: false,
                isAuthenticated: false,
                user:null,
            }
        case LOGOUT_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }

        case ClearErrors:
            return{
                ...state,
                error: null,
            };
        default:
            return state;
    }
}

export const getAllPostsReducer = (state = {}, action) => {
    switch(action.type){
        case GET_ALL_POST_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_ALL_POST_SUCCESS:
            return{
                ...state,
                loading: false,
                posts: action.payload,
            };
        case GET_ALL_POST_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;

    }
}

export const userProfileReducer = (state = {}, action) => {
    switch(action.type){
        case USER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case USER_PROFILE_SUCCESS:
            return{
                ...state,
                loading: false,
                userProfile: action.payload,
            };
        case USER_PROFILE_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;

    }
}

export const allUsersReducer = (state = {}, action) => {
    switch(action.type){
        case ALL_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ALL_USERS_SUCCESS:
            return{
                ...state,
                loading: false,
                users: action.payload,
            };
        case ALL_USERS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;

    }
}

export const deleteUserReducer = (state = {}, action) => {
    switch(action.type){
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case DELETE_USER_SUCCESS:
            return{
                ...state,
                loading: false,
                message: action.payload,
            };
        case DELETE_USER_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        case ClearErrors:
            return{
                ...state,
                error: null,
            };
        case ClearMessages:
            return{
                ...state,
                message: null,
            };
        default:
            return state;

    }
}

