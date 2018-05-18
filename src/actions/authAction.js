import Axios from 'axios';

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from './types';

const axios = Axios.create({
  baseURL: 'http://localhost:4000/',
  timeout: false,
  params: {}
});

export const login = (values, history) => async dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
    isAuthenticated: false
  });
  try {
    const user = await axios.post('/users/login', { ...values });
    localStorage.setItem('token', user.token);

    dispatch({
      type: LOGIN_SUCCESS,
      isAuthenticated: true,
      token: user.token
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      isAuthenticated: false,
      error
    });
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  });

  localStorage.removeItem('token');

  dispatch({
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  });
};
