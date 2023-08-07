import { GET_PRODUCTS, SEARCH_PRODUCT_NAME } from "./actions-types";

const initialState = {
  products: [],
  isLoading: false,
  searchProduct: " ",
};

const rootReducer = (state = initialState, action) => {
  console.log("Action:", action); // Añadido log para imprimir la acción
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case SEARCH_PRODUCT_NAME:
      return {
        ...state,
        searchProduct: action.payload.toLowerCase(),
      };
    default:
      return state;
  }
};

export default rootReducer;

