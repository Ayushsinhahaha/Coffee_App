import {createSlice} from '@reduxjs/toolkit';

const ProductSlice=createSlice({
    name:'product',
    initialState:[],
    reducers:{
        addMyProducts(state,action){
            state.push(action.payload);
        },
        increaseQuantity(state, action) {
            let index = -1;
            state.map((item, index) => {
              if (item.id === action.payload) {
                myindex = index;
              }
            });
            if (myindex === -1) {
            } else {
              state[myindex].quantity=state[myindex].quantity+1;
            }
          },
        decreaseQuantity(state, action) {
            let index = -1;
            state.map((item, index) => {
              if (item.id === action.payload) {
                myindex = index;
              }
            });
            if (myindex === -1) {
            } else {
              state[myindex].quantity=state[myindex].quantity-1;
            }
          },
        removeQuantity(state, action) {
            let index = -1;
            state.map((item, index) => {
              if (item.id === action.payload) {
                myindex = index;
              }
            });
            if (myindex === -1) {
            } else {
              state[myindex].quantity=0;
            }
          },
    }
})

export const {addMyProducts,increaseQuantity,decreaseQuantity,removeQuantity}=ProductSlice.actions;
export default ProductSlice.reducer;