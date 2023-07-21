import { configureStore } from '@reduxjs/toolkit';

import rocketSlice from './rockets/rocketSlice';
import missionSlice from './missions/missionSlice';
import dragonSlice from './dragons/dragonSlice';

const rootReducer = {
  rockets: rocketSlice.reducer,
  missions: missionSlice.reducer,
  dragons: dragonSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
