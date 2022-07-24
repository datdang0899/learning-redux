import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;

const bugSlice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.list.push({ ...action.payload, resolved: false, id: ++lastId });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      bugs.list = bugs.list.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved } = bugSlice.actions;

// reselect .
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs.list,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export default bugSlice.reducer;
