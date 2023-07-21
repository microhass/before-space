import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import testImage from './../../images/hack-4.jpg'

const rocketsURL = 'http://localhost:8000/space/rockets';

export const fetchRockets = createAsyncThunk(
  'rockets/fetch',
  async () => {
    const res = await axios.get(rocketsURL);
    return res.data;
  }
);

const initialState = {
  rockets: [],
  isLoading: false,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      const res = action.payload;
      const rocketsData = res.map((rocket) => {
        const {
          id,
          name,
          description,
          flickr_images: images,
        } = rocket;

        return { id, name, description, image: images[0], testImage };
      });
      state.rockets = rocketsData;
    });
  },
});

export const rocketActions = rocketSlice.actions;

export default rocketSlice;
