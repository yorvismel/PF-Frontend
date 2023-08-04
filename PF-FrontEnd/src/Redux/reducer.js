import { GET_PRODUCTS } from "./actions-types";

const initialState = {
  products: [],
  isLoading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default rootReducer;
