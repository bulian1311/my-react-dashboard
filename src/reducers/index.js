import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  products: productReducer,
  form: formReducer,
  auth: authReducer
});
