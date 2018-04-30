import Axios from 'axios';
import { FETCH_PRODUCTS } from './types';

const axios = Axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: false,
  params: {}
});

export const fetchProducts = () => async dispatch => {
  const res = await axios.get('/products');

  return dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};
