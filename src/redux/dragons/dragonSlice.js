import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dragonsURL = 'http://localhost:8000/space/dragons';
import testImage from './../../images/hack-4.jpg';

export const fetchDragons = createAsyncThunk(
  'dragons/fetch',
  async () => {
    const res = await axios.get(dragonsURL);
    return res.data;
  }
);

const initialState = {
  dragons: [],
  isLoading: false,
};

const dragonSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    toggleDragonReservation: (state, action) => {
      const dragonId = action.payload;
      const newDragon = state.dragons.map((dragon) => {
        if (dragon.id !== dragonId) return dragon;
        return { ...dragon, reserved: !dragon.reserved };
      });
      state.dragons = newDragon;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDragons.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      state.isLoading = false;
      const res = action.payload;
      const dragonsData = res.map((dragon) => {
        const { id, name, type, flickr_images: images } = dragon;

        return {
          id,
          name,
          type,
          image: images[0],
          testImage,
          reserved: false,
        };
      });
      state.dragons = dragonsData;
    });
  },
});

export const dragonActions = dragonSlice.actions;

export default dragonSlice;
