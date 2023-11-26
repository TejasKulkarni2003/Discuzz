import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"
import{ composeWithDevTools} from "redux-devtools-extension"
import { getAllPostsReducer, userProfileReducer, userReducer } from "./Reducers/userReducer";


const reducer = combineReducers({
    user: userReducer,
    allPosts: getAllPostsReducer,
    userProfile: userProfileReducer,
});


const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;