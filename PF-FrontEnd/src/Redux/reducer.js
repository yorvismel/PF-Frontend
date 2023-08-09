import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  SEARCH_PRODUCT_NAME,
  POST_PRODUCT,
} from "./actions-types";

const initialState = {
  products: [],
  isLoading: false,
  searchProduct: " ",
  categories: [],
  postproduct: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      console.log("Products received in reducer:", action.payload);
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
    case "persist/REHYDRATE":
      return {
        ...state,
        ...(action.payload && action.payload.root), // Usar la clave específica, en este caso, 'root'
      };
    default:
      return state;
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case POST_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
  }
};

export default rootReducer;
