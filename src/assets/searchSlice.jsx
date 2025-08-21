import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",   // this will hold the selected suggestion/search term
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;   // store clicked suggestion/search text
    },
    clearQuery: (state) => {
      state.query = "";   // optional: reset search
    },
  },
});

export const { setQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;