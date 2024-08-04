import { createSlice } from "@reduxjs/toolkit";

import { getPhotosThunk } from "./getPhotosThunk";

const postsSlice = createSlice({
  name: "photos",
  initialState: {
    photos: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPhotosThunk.fulfilled, (state, action) => {
        state.photos = action.payload;
      });
  },
});


export default postsSlice.reducer;