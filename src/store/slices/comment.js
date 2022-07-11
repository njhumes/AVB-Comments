import { createSlice, createSelector } from "@reduxjs/toolkit";

import { mockComments } from "store/api";

export const name = "comment";
const initialState = {
  comments: mockComments,
};

const commentSlice = createSlice({
  name,
  initialState,
  reducers: {
    setComments(state, action) {
      // Prepending the latest comment to the top of the list
      state.comments = [action.payload, ...state.comments];
    },
  },
});

const getSlice = (state) => state[name] || {};

export const getComments = createSelector(getSlice, (slice) => slice.comments);
export const { setComments } = commentSlice.actions;
export default commentSlice.reducer;
