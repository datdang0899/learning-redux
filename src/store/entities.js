import { combineReducers } from "redux";
import bugReducer from "./bugs";
import postReducer from "./posts";

export default combineReducers({
  bugs: bugReducer,
  posts: postReducer,
});
