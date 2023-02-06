import {
  CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_ERROR
} from '../types'

const initialState = {
  products: [],
  error: null,
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {

    case CREATE_PRODUCT:
      return {
        ...state,
        loading: action.payload
      }
    
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }

    case CREATE_PRODUCT_ERROR:
      return {
        ...state,
        loading: action.payload
      }

    default:
      return state;
  }
}
