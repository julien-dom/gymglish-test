import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favoriteSlice = createSlice({
  name: "favorites",

  initialState,
  reducers: {
    addFavoriteToStore: (state, action) => {
      state.value.push(action.payload);
      console.log('log reducer favorite', state.value)
    },
  },

    removeFavoriteFromStore: (state, action) => {
    state.value = state.value.filter(
      (artwork) => artwork.title !== action.payload.title
    );
  },

    removeAllFavorites: (state) => {
    state.value = [];
  },
});

export const {
  addFavoriteToStore,
  removeFavoriteFromStore,
  removeAllFavorites,
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
