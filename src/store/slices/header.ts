import { createSlice } from "@reduxjs/toolkit";
interface HeaderInitialState {
  headerText: string;
  headerVisibility: "collapse" | "visible";
}
const initialState: HeaderInitialState = {
  headerText: "",
  headerVisibility: "collapse",
};

export const HeaderSlice = createSlice({
  name: "header",
  initialState: initialState,
  reducers: {
    showHeader: (state, action) => {
      return Object.assign({}, state, {
        headerText: action.payload.headerText,
        headerVisibility: "visible",
      });
    },
    hideHeader: (state, action) => {
      return Object.assign({}, state, {
        headerVisibility: "collapse",
      });
    },
  },
});

export const { showHeader, hideHeader } = HeaderSlice.actions;

export default HeaderSlice.reducer;
