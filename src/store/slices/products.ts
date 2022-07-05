import { createSlice } from "@reduxjs/toolkit";
interface InitialState {
  items : any[]
}
const initialState = { items: [] } as InitialState

export const ProductSlice = createSlice({
  name: "products",
  
  initialState: initialState,
  reducers: {
    setInitialProductsData: (state, action) => {
      state.items.push(action.payload)
    },
    setProductsData: (state, action) => {
      state.items = action.payload;
    },
    clearProducts: (state, action) => {
      state.items = [];
    },
  },
});

export const { setProductsData, clearProducts, setInitialProductsData } = ProductSlice.actions;

export default ProductSlice.reducer;