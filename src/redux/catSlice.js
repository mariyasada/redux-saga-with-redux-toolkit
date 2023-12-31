import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
  name: "Cats",
  initialState: {
    catsList: [],
    loading: false,
    catListByBreed: [],
    selectedID: null,
    catDetail: {},
  },
  reducers: {
    fetchCats: (state) => {
      state.loading = true;
    },
    getCats: (state, action) => {
      state.loading = false;
      state.catsList = action.payload;
    },
    getCatID: (state, action) => {
      state.selectedID = action.payload;
    },
    setCatDetails: (state, action) => {
      state.catListByBreed = action.payload;
    },
    setSingleCatDetail: (state, action) => {
      state.catDetail = action.payload;
    },
  },
});

export default catSlice.reducer;
export const {
  fetchCats,
  getCats,
  getCatID,
  setCatDetails,
  setSingleCatDetail,
} = catSlice.actions;
