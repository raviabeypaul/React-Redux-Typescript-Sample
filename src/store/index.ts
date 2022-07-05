import { combineReducers } from '@reduxjs/toolkit'
import DialogReducer from './slices/dialog'
import HeaderReducer from './slices/header';
import MessageReducer from './slices/message';
import UserReducer from './slices/user'
import ProductReducer from './slices/products';
const rootReducer = combineReducers({
    dialog : DialogReducer,
    header : HeaderReducer,
    message : MessageReducer,
    user : UserReducer,
    products : ProductReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer