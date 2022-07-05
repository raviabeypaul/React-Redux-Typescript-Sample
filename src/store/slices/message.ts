import { createSlice } from "@reduxjs/toolkit";
import { MessageDTO } from "../../dtos/MessageDTO";



const initialState = { message: "", messageType: "none" } as MessageDTO;

export const MessageSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload;
      state.messageType = "message";
    },
    setErrorMessage: (state, action) => {
      state.message = action.payload;
      state.messageType = "error";
    },
    clearMessage: (state, action) => {
      state.message = "";
      state.messageType = "none";
    },
  },
});

export const { setMessage, setErrorMessage, clearMessage } =
  MessageSlice.actions;

export default MessageSlice.reducer;
