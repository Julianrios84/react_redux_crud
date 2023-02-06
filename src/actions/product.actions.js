import {
  CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_ERROR
} from '../types'

import clientAxios from '../config/axios.config'

export function createProductAction(product) {
  return async (dispatch) => {
    dispatch(createProduct())
    
    try {
      // Insertar en la API
      await clientAxios.post('/products', product)
      // Actualizar el state
      dispatch(createProductSuccess(product))
    } catch (error) {
      // Si hay un error cambiaar el state
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

const createProductError = (status) => ({
  type: CREATE_PRODUCT_ERROR,
  payload: status
})
