import axios from "axios";
import {
  POST_PRODUCT,
  GET_PRODUCTS,
  SEARCH_PRODUCT_NAME,
  GET_CATEGORIES,
  SET_FILTERS,
  GET_FILTERED_CATEGORIES,
  SEND_EMAIL_REQUEST,
} from "./actions-types";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pf-backend-nwu9.onrender.com/products"
      );
      const products = response.data;
      dispatch({ type: GET_PRODUCTS, payload: products });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};

export const searchProductName = (productName) => {
  return { type: SEARCH_PRODUCT_NAME, payload: productName };
};

export const getcategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://pf-backend-nwu9.onrender.com/categories"
      );
      const categories = response.data;
      dispatch({ type: GET_CATEGORIES, payload: categories });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    filters,
  };
};

export const getFilteredCategories = (filters) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://pf-backend-nwu9.onrender.com/categories`);
      if (!response.ok) {
        throw new Error("Error al obtener las categorías");
      }

      const data = await response.json();
      const filteredCategories = applyFilters(data, filters);

      dispatch({
        type: GET_FILTERED_CATEGORIES,
        filteredCategories,
      });
    } catch (error) {
      console.error("Error al obtener categorías filtradas:", error);
    }
  };
};

const applyFilters = (data, filters) => {
  return data.filter((category) => {
    if (filters.name) {
      return category.toLowerCase().includes(filters.name.toLowerCase());
    }
    return true; // Si no hay filtro de nombre, retorna todas las categorías
  });
};



export const postproducct = (productdata) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://pf-backend-nwu9.onrender.com/products",
        productdata
      );
      const postproducct = response.data;
      dispatch({ type: POST_PRODUCT, payload: postproducct });
      alert("new product create")
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};


// actions.js
export const sendPaymentConfirmationEmail = (toEmail, totalAmount) => {
  return {
    type: SEND_EMAIL_REQUEST,
    payload: { toEmail, totalAmount }
  };
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
