import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";   // ✅ import search slice

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,   // ✅ add it here
  },
});

export default Store;