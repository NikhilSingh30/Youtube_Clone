import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        isshow : true
    },
    reducers : {
        hide :(state,action) =>{
            state.isshow = !state.isshow
        },
        hidesidebar : (state,action) =>{
            state.isshow = false;
        }
    }
})
export const {hide, hidesidebar} = cartSlice.actions;
export default cartSlice.reducer;