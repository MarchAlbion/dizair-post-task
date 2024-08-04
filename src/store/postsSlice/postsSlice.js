import { createSlice } from "@reduxjs/toolkit";

import { getPostsThunk } from "./getPostsThunk";




const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.posts = action.payload;
      });
  },
});


export default postsSlice.reducer;