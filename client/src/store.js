import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"
import{ composeWithDevTools} from "redux-devtools-extension"
import { allUsersReducer, deleteUserReducer, getAllPostsReducer, userProfileReducer, userReducer } from "./Reducers/userReducer";
import { addToFavouritesReducer, commentReducer, createPostReducer, deleteReducer, getPostsReducer, likeReducer } from "./Reducers/postReducer";


const reducer = combineReducers({
    user: userReducer,
    allPosts: getAllPostsReducer,
    userProfile: userProfileReducer,
    like: likeReducer,
    comment: commentReducer,
    createPost: createPostReducer,
    addToFav: addToFavouritesReducer,
    postCategorised: getPostsReducer,
    allUsers: allUsersReducer,
    deletePost: deleteReducer,
    deleteUser: deleteUserReducer
});


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;