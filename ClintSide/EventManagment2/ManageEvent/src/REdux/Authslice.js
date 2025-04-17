// src/store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, 
  event : null, // will hold { id, role, name, ... }
  id:null,
  isLogin:false,
  isbooked:false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
    userEvent(state, action){
      state.event = action.payload;
    },
    EventId(state, action){
      state.id = action.payload;
    },
    bookingCheck(state, action){
      state.isbooked =  action.payload;
    }
    

  }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
