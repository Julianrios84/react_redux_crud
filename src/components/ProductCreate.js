import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProductAction } from '../actions/product.actions';

const ProductCreate = () => {
  // state del componente
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();
  // mandar llammar el action de createProductAction
  const createProduct = (product) => dispatch(createProductAction(product));
  // cuando el usuario haga submit
  const submitCreateProduct = (e) => {
    e.preventDefault();

    // validar formulario
    if (name.trim() === '' || price <= 0) {
      return;
    }

    // Crear el nuevo producto
    createProduct({
      name,
      price
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>
            <form onSubmit={submitCreateProduct}>
              <div className="form-group">
                <label htmlFor="">Nombre producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre producto"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Precio producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio producto"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
