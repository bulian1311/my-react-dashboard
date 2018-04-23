import { FETCH_PRODUCT, FETCH_PRODUCTS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      const products = action.payload;
      return { ...state, products };
    case FETCH_PRODUCT:
      const product = action.payload;
      return { ...state, product };
    default:
      return state;
  }
}
