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
    },
  },
});

export const { addFavoriteToStore } = favoriteSlice.actions;
export default favoriteSlice.reducer;
