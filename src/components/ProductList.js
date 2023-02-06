import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { downloadingProductsAction } from '../actions/product.actions';
import Product from './Product';

const ProductList = () => {
  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  useEffect(() => {
    // Consultar la API
    const loadProducts = () => dispatch(downloadingProductsAction());
    loadProducts();
  }, []);

  // Acceder al state del store
  const products = useSelector((state) => state.products.products);

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
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="3">No hay productos</td>
            </tr>
          ) : (
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ProductList;
