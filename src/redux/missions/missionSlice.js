import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsURL = 'http://localhost:8000/space/missions';

export const fetchMissions = createAsyncThunk(
  'missions/fetch',
  async () => {
    const res = await axios.get(missionsURL);
    return res.data;
  }
);

const initialState = {
  missions: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      state.isLoading = false;
      const res = action.payload;
      const missionsData = res.map((mission) => {
        const {
          mission_id: id,
          mission_name: name,
          description,
        } = mission;

        return { id, name, description };
      });
      state.missions = missionsData;
    });
  },
});

export const rocketActions = missionSlice.actions;

export default missionSlice;
