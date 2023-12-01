import axios from "axios"
import { ADD_TO_FAVOURITES_FAIL, ADD_TO_FAVOURITES_REQUEST, ADD_TO_FAVOURITES_SUCCESS, COMMENT_FAIL, COMMENT_REQUEST, COMMENT_SUCCESS,
     CREATE_POST_FAIL, CREATE_POST_REQUEST, CREATE_POST_SUCCESS,
     LIKE_FAIL, LIKE_REQUEST, LIKE_SUCCESS } from "../Constants/postConstants"

export const likePost = (id) => async(dispatch) => {
    try {
        dispatch({type: LIKE_REQUEST})
        const {data} = await axios.get(`/api/v1/post/${id}`)

        dispatch({
            type: LIKE_SUCCESS,
            payload: data.message,
        })
    } catch (error) {
        dispatch({
            type: LIKE_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const addComment = (id, comment) => async(dispatch) => {
    try {
        dispatch({type: COMMENT_REQUEST})
        const {data} = await axios.post(`/api/v1/post/comment/${id}`, {comment},
            {
                headers: {
                "Content-Type": "application/json",
                },
            } 
        )

        dispatch({
            type: COMMENT_SUCCESS,
            payload: data.message,
        })
    } catch (error) {
        dispatch({
            type: COMMENT_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const createPost = (title, content, category) => async(dispatch) => {
    try {
        dispatch({type: CREATE_POST_REQUEST})

        const {data} = await axios.post("/api/v1/post/new", {title, content, category},
            {
                headers: {
                "Content-Type": "application/json",
                },
            } 
        )

        dispatch({
            type: CREATE_POST_SUCCESS,
            payload: data.message,
        })
    } catch (error) {
        dispatch({
            type: CREATE_POST_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const addToFav = (id) => async(dispatch) => {
    try {
        dispatch({type: ADD_TO_FAVOURITES_REQUEST})

        const {data} = await axios.get(`/api/v1/post/addtofav/${id}`)

        dispatch({
            type: ADD_TO_FAVOURITES_SUCCESS,
            payload: data.message,
        })
    } catch (error) {
        dispatch({
            type: ADD_TO_FAVOURITES_FAIL,
            payload: error.response.data.message,
        })
    }
}