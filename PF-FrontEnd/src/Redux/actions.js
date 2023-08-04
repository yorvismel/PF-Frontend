import axios from "axios";

const URL = "http://localhost:3001";
const PRODUCTS = "products";

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${URL}/${PRODUCTS}`);
      const products = response.data;
      console.log("REVISA", products);
      return dispatch({
        type: GET_PRODUCTS,
        payload: products,
        
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
};
