import {
  CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_ERROR
} from '../types'

export function createProductAction(product) {
  return (dispatch) => {
    dispatch(createProduct())
    
    try {
      dispatch(createProductSuccess(product))
    } catch (error) {
      dispatch(createProductError(true))
    }
  }
}

const createProduct = () => ({
  type: CREATE_PRODUCT,
  payload: true
})

const createProductSuccess = (product) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: product
})

const createProductError = (error) => ({
  type: CREATE_PRODUCT_ERROR,
  payload: error
})
