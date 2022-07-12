import { createSlice, createSelector } from "@reduxjs/toolkit";

import { mockComments } from "store/api";

export const name = "comment";
const initialState = {
  comments: mockComments,
};

// By keeping track of comments using Redux, the comments are available throughout the app without having to pass down to multiple components and track the data in a parent component
const commentSlice = createSlice({
  name,
  initialState,
  reducers: {
    setComments(state, action) {
      // Prepending the latest comment to the top of the list so it will render first in the app
      state.comments = [action.payload, ...state.comments];
    },
  },
});

const getSlice = (state) => state[name] || {};

export const getComments = createSelector(getSlice, (slice) => slice.comments);
export const { setComments } = commentSlice.actions;
export default commentSlice.reducer;
