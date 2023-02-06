import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { downloadingProductsAction } from '../actions/product.actions';

const ProductList = () => {
  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la API
    const loadProducts = ( ) => dispatch(downloadingProductsAction())
    loadProducts();
  }, [])

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de productos</h2>
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </Fragment>
  )
}

export default ProductList