import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
    try {
      dispatch({
        type: "LoginRequest",
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
        type: "LoginSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "LoginFailure",
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async(dispatch) => {
    try {
        dispatch({type: "LoadRequest"})

        const {data} = await axios.get("/api/v1/profile")

        dispatch({
            type: "LoadSuccess",
            payload: data.user,
        })
    } catch (error) {
        dispatch({
            type: "LoadFailure",
            payload: error.response.data.message,
        })
    }
}

export const loadSingleUser = (id) => async(dispatch) => {
  try {
      dispatch({type: "LoadUserRequest"})

      const {data} = await axios.get(`/api/v1/user/details/${id}`)

      dispatch({
          type: "LoadUserSuccess",
          payload: data,
      })
  } catch (error) {
      dispatch({
          type: "LoadUserFailure",
          payload: error.response.data.message,
      })
  }
}

export const getAllPosts = () => async(dispatch) => {
    try {
        dispatch({type: "getAllPostsRequest"})

        const {data} = await axios.get("/api/v1/posts")

        dispatch({
            type: "getAllPostsSuccess",
            payload: data.posts,
        })
    } catch (error) {
        dispatch({
            type: "getAllPostsFail",
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
      type: "RegisterRequest",
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
      type: "RegisterSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "RegisterFailure",
      payload: error.response.data.message,
    });
  }
};