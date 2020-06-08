import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART_USER
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(){
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function addToCart(_id) {
  const request = axios.get(`${USER_SERVER}/addToCart?productId=${_id}`)
  .then(response => response.data);

  return {
    type: ADD_TO_CART_USER,
    payload: request
  }
}

export function getCartItems(cartItems, userCart) {
    const request = axios.get(`/api/product/products_by_id?id=${cartItems}&type=array`)
    .then(response => response.data);

    //Make CartDetail inside Redux Store
    // We need to add quantity data to Product Information that come from Product Collection.
  
    return {
      type: ADD_TO_CART_USER,
      payload: request
    }
  }

