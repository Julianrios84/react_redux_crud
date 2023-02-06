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
    default:
      return state;
  }
}
