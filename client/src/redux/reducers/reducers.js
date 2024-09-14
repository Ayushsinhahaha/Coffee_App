import {ADD_TO_CART, REMOVE_FROM_CART} from '../ActionTypes';
const initialState = [];

const reducers = (state = initialState, actions) => {
  switch (actions) {
    case ADD_TO_CART:
      return [...initialState, ...actions];
    case REMOVE_FROM_CART:
      const deletedArray = initialState.filter((item, index) => {
        return index !== actions.payload;
      });
      return deletedArray;
    default:
      return initialState;
  }
};

export default reducers;
