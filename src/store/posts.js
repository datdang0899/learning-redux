import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, apiCallFaild } from "../store/api";

let lastId = 0;

const postSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    loading: false,
    lastFetch: "dat dep trai vai dai",
  },
  reducers: {
    postRequest: (posts, action) => {
      posts.loading = true;
    },
    postReceived: (posts, action) => {
      posts.list = action.payload;
      posts.loading = false;
      posts.lastFetch = Date.now();
    },
    postRequestFailed: (posts, action) => {
      posts.loading = false;
    },
  },
});

export const { postReceived, postRequest, postRequestFailed } =
  postSlice.actions;

// load post .
const url = "/posts";

export const loadPosts = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs;

  console.log(lastFetch);

  return dispatch(
    apiCallBegan({
      url,
      onStart: postRequest.type,
      onSuccess: postReceived.type,
      onRequestFaild: apiCallFaild.type,
    })
  );
};

export default postSlice.reducer;
