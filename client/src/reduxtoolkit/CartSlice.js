import {createSlice} from '@reduxjs/toolkit';

const CartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex === -1) {
        state.push({
          name: action.payload.name,
          id: action.payload.id,
          image: action.payload.image,
          quantity: action.payload.quantity + 1,
          price: action.payload.price,
        });
      } else {
        state[myindex].quantity = state[myindex].quantity + 1;
      }
    },
    removeProductFromCart(state, action) {
      let myindex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
      } else {
        state[myindex].quantity = state[myindex].quantity - 1;
      }
    },
    deleteCartItem(state, action) {
      // return (state = state.filter(item => {
      //   item.id !== action.payload;
      // }));
      return state.filter(item=>item.id!==action.payload);
    },
  },
});

export const {addProductToCart, removeProductFromCart, deleteCartItem} =
  CartSlice.actions;
export default CartSlice.reducer;
