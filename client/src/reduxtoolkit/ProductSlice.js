import {createSlice} from '@reduxjs/toolkit';

const ProductSlice=createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addMyProducts(state,action){
            state.push(action.payload);
        }
    }
})

export const {addMyProducts}=ProductSlice.actions;
export default ProductSlice.reducer;