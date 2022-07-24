import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
} from "./store/bugs";
import { postReceived , loadPosts} from "./store/posts";
import * as actions from "./store/api";

const store = configureStore();

store.dispatch(bugAdded({ description: "bug 1" }));

store.dispatch(loadPosts());

setTimeout(() => store.dispatch(loadPosts()), 2000) ; 

console.log(store.getState());
