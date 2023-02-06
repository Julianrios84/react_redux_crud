import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  DOWNLOADING_PRODUCTS,
  DOWNLOADING_PRODUCTS_SUCCESS,
  DOWNLOADING_PRODUCTS_ERROR,
  GET_PRODUCT_TO_REMOVE,
  GET_PRODUCT_TO_REMOVE_SUCCESS,
  GET_PRODUCT_TO_REMOVE_ERROR
} from '../types';

const initialState = {
  products: [],
  error: null,
  loading: false,
  remove: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOADING_PRODUCTS:
    case CREATE_PRODUCT:
      return {
        ...state,
        loading: action.payload
      };

    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      };

    case DOWNLOADING_PRODUCTS_ERROR:
    case CREATE_PRODUCT_ERROR:
    case GET_PRODUCT_TO_REMOVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case DOWNLOADING_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      };

    case GET_PRODUCT_TO_REMOVE:
      return {
        ...state,
        remove: action.payload
      };

    case GET_PRODUCT_TO_REMOVE_SUCCESS:
      return {
        ...state,
        products: state.products.filter(product => product.id !== state.remove),
        remove: null
      }

    default:
      return state;
  }
}
