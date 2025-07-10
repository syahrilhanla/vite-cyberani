import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  currentEpisode: number;
}

const initialState: InitialState = {
  currentEpisode: 1,
};

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    nextEpisode: (state) => {
      state.currentEpisode += 1;
    },
    prevEpisode: (state) => {
      if (state.currentEpisode > 1) {
        state.currentEpisode -= 1;
      }
    },
    goToEpisode: (state, action) => {
      state.currentEpisode = parseInt(action.payload);
    },
  },
});

export const {
  nextEpisode,
  prevEpisode,
  goToEpisode,
} = animeSlice.actions;

export default animeSlice.reducer;
