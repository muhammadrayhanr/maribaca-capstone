import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPostProgramming = createAsyncThunk('postProgramming/getPostProgramming', async () => {
  try {
    const response = await axios.get(import.meta.env.VITE_API_PROGRAMMING);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const postsProgrammingSlice = createSlice({
  name: 'postsProgramming',
  initialState: {
    postsProgramming: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPostProgramming.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostProgramming.fulfilled, (state, action) => {
        state.loading = false;
        state.postsProgramming = action.payload;
      })
      .addCase(getPostProgramming.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default postsProgrammingSlice.reducer;
