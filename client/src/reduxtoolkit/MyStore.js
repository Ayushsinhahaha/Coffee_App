import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from './ProductSlice'

export const MyStore=configureStore({
    reducer:{
        product: ProductReducer
    }
})