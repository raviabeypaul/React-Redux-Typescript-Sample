import { createSlice } from "@reduxjs/toolkit";

import { UserDTO } from "../../dtos/UserDTO";

const initialState = { firstName: "", lastName: "none", email:"" } as UserDTO;
export const UserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser : initialState
  },
  reducers: {
    setUser: (state, action) => {
      state.currentUser = action.payload
    },
    removeUser: (state, action) => {
      state.currentUser = { email:'', firstName : '', lastName : ''}
    },
  }
});
export const { setUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;