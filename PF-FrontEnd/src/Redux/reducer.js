import { GET_PRODUCTS, SEARCH_PRODUCT_NAME } from "./actions-types";

const initialState = {
  products: [],
  isLoading: false,
  searchProduct: " ",
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
    case 'persist/REHYDRATE':
      return {
        ...state,
        ...(action.payload && action.payload.root), // Usar la clave específica, en este caso, 'root'
      };
    default:
      return state;
  }
};

export default rootReducer;
