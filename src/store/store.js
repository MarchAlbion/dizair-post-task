import { configureStore } from "@reduxjs/toolkit";

import postsSlice from "./postsSlice/postsSlice";
import photosSlice from "./photosSlice/photosSlice";

const store = configureStore({
  reducer: {
    posts: postsSlice,
    photos: photosSlice,
  },
});

export default store;
