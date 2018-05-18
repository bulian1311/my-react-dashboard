import { FETCH_PRODUCTS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      const products = action.payload;
      console.log(products, state);
      return { ...state, ...products };
    default:
      return state;
  }
}
