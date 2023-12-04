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
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  ClearMessages,
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

export const getAllUsers = () => async(dispatch) => {
  try {
      dispatch({type: ALL_USERS_REQUEST})

      const {data} = await axios.get(`/api/v1/user/getallusers`)
      // console.log(data);
      dispatch({
          type: ALL_USERS_SUCCESS,
          payload: data.usersData,
      })
  } catch (error) {
      dispatch({
          type: ALL_USERS_FAIL,
          payload: error.response.data.message,
      })
  }
}

export const deleteUser = (id) => async(dispatch) => {
  try {
      dispatch({type: DELETE_USER_REQUEST})
      console.log(id);
      const {data} = await axios.delete(`/api/v1/user/deleteuser/${id}`)
      console.log(data);
      dispatch({
          type: DELETE_USER_SUCCESS,
          payload: data.message,
      })
  } catch (error) {
      dispatch({
          type: DELETE_USER_FAIL,
          payload: error.response.data.message,
      })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({type: ClearErrors})
}
export const clearMessages = () => async (dispatch) => {
  dispatch({type: ClearMessages})
}

export const clearMessagesU = () => async (dispatch) => {
  dispatch({type: ClearMessages})
}

export const clearErrorsU = () => async (dispatch) => {
  dispatch({type: ClearErrors})
}