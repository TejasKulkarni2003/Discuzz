import {USER_LOGIN_REQUEST, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST,
  LOAD_SUCCESS, LOAD_FAIL, LOAD_REQUEST,
  LOGOUT_SUCCESS, LOGOUT_FAIL,
  UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_FAIL,
  GET_ALL_POST_FAIL, GET_ALL_POST_REQUEST, GET_ALL_POST_SUCCESS,
  ClearErrors,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  } from "../Constants/userConstants"
import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
  
      const { data } = await axios.post(
        "/api/v1/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async(dispatch) => {
    try {
        dispatch({type: LOAD_REQUEST})

        const {data} = await axios.get("/api/v1/profile")
        // console.log(data);

        dispatch({
            type: LOAD_SUCCESS,
            payload: data.user,
        })
    } catch (error) {
        dispatch({
            type: LOAD_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const loadSingleUser = (id) => async(dispatch) => {
  try {
      dispatch({type: USER_PROFILE_REQUEST})

      const {data} = await axios.get(`/api/v1/user/details/${id}`)
      data.posts = data.posts.reverse()

      dispatch({
          type: USER_PROFILE_SUCCESS,
          payload: data,
      })
  } catch (error) {
      dispatch({
          type: USER_PROFILE_FAIL,
          payload: error.response.data.message,
      })
  }
}

export const getAllPosts = (keyword="") => async(dispatch) => {
    try {
        dispatch({type: GET_ALL_POST_REQUEST})

        const {data} = await axios.get(`/api/v1/posts?keyword=${keyword}`)

        dispatch({
            type: GET_ALL_POST_SUCCESS,
            payload: data.posts,
        })
    } catch (error) {
        dispatch({
            type: GET_ALL_POST_FAIL,
            payload: error.response.data.message,
        })
    }
}

export const getAllUsers = () => async(dispatch) => {
    try {
        dispatch({type: "getAllUsersRequest"})

        const {data} = await axios.get("/api/v1/user/getallusers")

        dispatch({
            type: "getAllUsersSuccess",
            payload: data.usersData,
        })
    } catch (error) {
        dispatch({
            type: "getAllUsersFail",
            payload: error.response.data.message,
        })
    }
}

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    
    const { data } = await axios.post(
      "/api/v1/register",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async(dispatch) => {
  try {
      const {data} = await axios.get("/api/v1/logout")

      dispatch({type: LOGOUT_SUCCESS})
  } catch (error) {
      dispatch({
          type: LOGOUT_FAIL,
          payload: error.response.data.message,
      })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({type: ClearErrors})
}