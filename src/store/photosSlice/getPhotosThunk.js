import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotosThunk = createAsyncThunk("photos/getPhotos", async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=1&limit=10");
  const data = await response.json();
  return data;
});