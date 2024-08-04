import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPostsThunk = createAsyncThunk("posts/getPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});