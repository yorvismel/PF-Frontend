import axios from 'axios';
import { GET_PRODUCTS, SEARCH_PRODUCT_NAME,  } from './actions-types';

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://pf-backend-nwu9.onrender.com/products');
      const products = response.data;
      dispatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const searchProductName = (productName) => {
  return { type: SEARCH_PRODUCT_NAME, payload: productName };
};



/*import axios from "axios";

import { GET_PRODUCTS, SEARCH_PRODUCT_NAME, } from "./actions-types";

// const URL = "https://pf-backend-nwu9.onrender.com/";
 const URL = "http://localhost:3001";
const PRODUCTS = "products";


export const searchProductName = (searchTerm) => ({
  type: SEARCH_PRODUCT_NAME,
  payload: searchTerm,
});

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/${PRODUCTS}`);
      const products = response.data;
      console.log("Products received:", products); // Log para verificar los productos recibidos
      return dispatch({
        type: GET_PRODUCTS,
        payload: products,
        
      });
    } catch (error) {
      console.log("Error fetching products:", error); // Log para capturar errores de la petición
    }
  };
};*/