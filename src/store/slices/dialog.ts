import { createSlice } from "@reduxjs/toolkit";

interface DialogInitialState {
    open : boolean;
    message : string;
}

const initialState : DialogInitialState = {
    open : false,
    message : ''
}

export const DialogSclice= createSlice({
    name : 'dislog',
    initialState : initialState,
    reducers: {
        showDialog : (state, action)=>{
            state.open = true;
            state.message = action.payload.message;
        },
        hideDialog : (state, action) =>{
            state.open = false;
            state.message=""
        }
    }

})

export const {showDialog, hideDialog} = DialogSclice.actions;
export default DialogSclice.reducer;