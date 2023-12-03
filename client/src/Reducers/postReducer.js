// import { createReducer } from "@reduxjs/toolkit"
// const initialState = {}

// export const likePostReducer = createReducer(initialState, {
//     likeRequest: (state) => {
//         state.loading = true;
//     },
//     likeSuccess: (state, action) => {
//         state.loading = false;
//         state.message = action.payload;
//     },
//     likeFail: (state, action) => {
//         state.loading = false;
//         state.errors = action.payload;
//     },
//     clearErrors: (state) => {
//         state.error = null
//     },
//     clearMessages: (state) => {
//         state.message = null
//     }
// })

import { ADD_TO_FAVOURITES_FAIL, ADD_TO_FAVOURITES_REQUEST, ADD_TO_FAVOURITES_SUCCESS, ClearErrors, ClearMessages, COMMENT_FAIL, COMMENT_REQUEST, COMMENT_SUCCESS,
         CREATE_POST_FAIL,
         CREATE_POST_REQUEST,
         CREATE_POST_SUCCESS,
         GET_POSTS_FAIL,
         GET_POSTS_REQUEST,
         GET_POSTS_SUCCESS,
         LIKE_FAIL, LIKE_REQUEST, LIKE_SUCCESS } from "../Constants/postConstants"

export const likeReducer = (state = {}, action) => {
    switch(action.type){
        case LIKE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case LIKE_SUCCESS:
            return{
                ...state,
                loading : false,
                message : action.payload,
            };
        case LIKE_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
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

export const commentReducer = (state = {}, action) => {
    switch(action.type){
        case COMMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case COMMENT_SUCCESS:
            return{
                ...state,
                loading : false,
                message : action.payload,
            };
        case COMMENT_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
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

export const createPostReducer = (state = {}, action) => {
    switch(action.type){
        case CREATE_POST_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case CREATE_POST_SUCCESS:
            return{
                ...state,
                loading : false,
                message : action.payload,
            };
        case CREATE_POST_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
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

export const addToFavouritesReducer = (state = {}, action) => {
    switch(action.type){
        case ADD_TO_FAVOURITES_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ADD_TO_FAVOURITES_SUCCESS:
            return{
                ...state,
                loading : false,
                message : action.payload,
            };
        case ADD_TO_FAVOURITES_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
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

export const getPostsReducer = (state = {}, action) => {
    switch(action.type){
        case GET_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case GET_POSTS_SUCCESS:
            return{
                ...state,
                loading: false,
                posts: action.payload,
            };
        case GET_POSTS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;

    }
}