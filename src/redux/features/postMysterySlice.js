import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPostMastery = createAsyncThunk('postMystery/getPostMystery', async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_MYSTERY);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const postsMysterySlice = createSlice({
  name: 'postsMystery',
  initialState: {
    postsMystery: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostMastery.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostMastery.fulfilled, (state, action) => {
        state.loading = false;
        state.postsMystery = action.payload;
      })
      .addCase(getPostMastery.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsMysterySlice.reducer;
