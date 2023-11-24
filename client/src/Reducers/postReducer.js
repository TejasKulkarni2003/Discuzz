import { createReducer } from "@reduxjs/toolkit"
const initialState = {}

export const likePostReducer = createReducer(initialState, {
    likeRequest: (state) => {
        state.loading = true;
    },
    likeSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    likeFail: (state, action) => {
        state.loading = false;
        state.errors = action.payload;
    },
    clearErrors: (state) => {
        state.error = null
    },
    clearMessages: (state) => {
        state.message = null
    }
})