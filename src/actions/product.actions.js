import {
  CREATE_PRODUCT,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_ERROR,
  DOWNLOADING_PRODUCTS,
  DOWNLOADING_PRODUCTS_SUCCESS,
  DOWNLOADING_PRODUCTS_ERROR,
  GET_PRODUCT_TO_REMOVE,
  GET_PRODUCT_TO_REMOVE_SUCCESS,
  GET_PRODUCT_TO_REMOVE_ERROR,
  GET_PRODUCT_TO_UPDATE,
  GET_PRODUCT_TO_UPDATE_SUCCESS,
  GET_PRODUCT_TO_UPDATE_ERROR
} from '../types';

import clientAxios from '../config/axios.config';
import Swal from 'sweetalert2';

export function createProductAction(product) {
  return async (dispatch) => {
    dispatch(createProduct());

    try {
      // Insertar en la API
      await clientAxios.post('/products', product);
      // Actualizar el state
      dispatch(createProductSuccess(product));
      // Alerta
      Swal.fire('Correcto', 'El producto se creo correctamente.', 'success');
    } catch (error) {
      // Si hay un error cambiaar el state
      dispatch(createProductError(true));
      // Alerta Error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error, intenta de nuevo'
      });
    }
  };
}

const createProduct = () => ({
  type: CREATE_PRODUCT,
  payload: true
});

const createProductSuccess = (product) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: product
});

const createProductError = (status) => ({
  type: CREATE_PRODUCT_ERROR,
  payload: status
});

export function downloadingProductsAction() {
  return async (dispatch) => {
    dispatch(downloadingProducts());

    try {
      const response = await clientAxios.get('/products');
      dispatch(downloadingProductsSuccess(response.data));
    } catch (error) {
      dispatch(downloadingProductsError());
    }
  };
}

const downloadingProducts = () => ({
  type: DOWNLOADING_PRODUCTS,
  payload: true
});

const downloadingProductsSuccess = (products) => ({
  type: DOWNLOADING_PRODUCTS_SUCCESS,
  payload: products
});

const downloadingProductsError = () => ({
  type: DOWNLOADING_PRODUCTS_ERROR,
  payload: true
});


export function getProductToRemoveAction(id) {
  return async (dispatch) => {
    dispatch(getProductToRemove(id));

    try {
      await clientAxios.delete(`/products/${id}`);
      dispatch(getProductToRemoveSuccess());

      // Si se elimina , mostramos alerta
      Swal.fire(
        'Eliminado!',
        'El producto se elimino correctamente.',
        'success'
      )

    } catch (error) {
      dispatch(getProductToRemoveError());
    }
  };
}

const getProductToRemove = (id) => ({
  type: GET_PRODUCT_TO_REMOVE,
  payload: id
});

const getProductToRemoveSuccess = () => ({
  type: GET_PRODUCT_TO_REMOVE_SUCCESS
});

const getProductToRemoveError = () => ({
  type: GET_PRODUCT_TO_REMOVE_ERROR,
  payload: true
});


export function getProductToUpdateAction(product) {
  return async (dispatch) => {
    dispatch(getProductToUpdate(product));

    // try {
    //   await clientAxios.put(`/products/${id}`);
    //   dispatch(getProductToUpdateSuccess());

    // } catch (error) {
    //   dispatch(getProductToUpdateError());
    // }
  };
}


const getProductToUpdate = (product) => ({
  type: GET_PRODUCT_TO_UPDATE,
  payload: product
});