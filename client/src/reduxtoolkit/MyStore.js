import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice';

const MyStore=configureStore({
    reducer:{
        name: cartReducer,
    }
})

export default MyStore;