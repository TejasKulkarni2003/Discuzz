import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"
import{ composeWithDevTools} from "redux-devtools-extension"
import { getAllPostsReducer, userProfileReducer, userReducer } from "./Reducers/userReducer";
import { addToFavouritesReducer, commentReducer, createPostReducer, getPostsReducer, likeReducer } from "./Reducers/postReducer";


const reducer = combineReducers({
    user: userReducer,
    allPosts: getAllPostsReducer,
    userProfile: userProfileReducer,
    like: likeReducer,
    comment: commentReducer,
    createPost: createPostReducer,
    addToFav: addToFavouritesReducer,
    postCategorised: getPostsReducer,
});


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;