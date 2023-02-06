import {
  CREATE_PRODUCT, CREATE_PRODUCT_SUCCESS, CREATE_PRODUCT_ERROR
} from '../types'

import clientAxios from '../config/axios.config'
import Swal from 'sweetalert2'

export function createProductAction(product) {
  return async (dispatch) => {
    dispatch(createProduct())
    
    try {
      // Insertar en la API
      await clientAxios.post('/products', product)
      // Actualizar el state
      dispatch(createProductSuccess(product))
      // Alerta
      Swal.fire(
        'Correcto',
        'El producto se creo correctamente.',
        'success'
      )
    } catch (error) {
      // Si hay un error cambiaar el state
      dispatch(createProductError(true))
      // Alerta Error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error, intenta de nuevo'
      })
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
