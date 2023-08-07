import axios from "axios";

import { GET_PRODUCTS, SEARCH_PRODUCT_NAME, } from "./actions-types";

// const URL = "https://pf-backend-nwu9.onrender.com/";
 const URL = "http://localhost:3001";
const PRODUCTS = "products";

// const response = await axios.get(`${URL}/${PRODUCTS}${SEARCH}${searchTerm}`);

// export const GET_PRODUCTS = "GET_PRODUCTS";

// export const setSearchTerm = (term) => ({
//   type: 'SET_SEARCH_TERM',
//   payload: term,
// });

// export const setSearchResults = (results) => ({
//   type: 'SET_SEARCH_RESULTS',
//   payload: results,
// });
export const searchProductName = (searchTerm) => ({
  type: SEARCH_PRODUCT_NAME,
  payload: searchTerm,
});



export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/${PRODUCTS}`);
      const products = response.data;
      // console.log("REVISA", products);
      return dispatch({
        type: GET_PRODUCTS,
        payload: products,
        
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
};
