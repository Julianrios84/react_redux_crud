import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProductAction } from '../actions/product.actions';
import { showAlertAction, hiddenAlertAction } from '../actions/alert.actions';

const ProductCreate = ({ history }) => {
  // Navigate
  let navigate = useNavigate();
  // state del componente
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();
  // Acceder al state del store
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const alert = useSelector((state) => state.alert.alert);
  // mandar llammar el action de createProductAction
  const createProduct = (product) => dispatch(createProductAction(product));
  // cuando el usuario haga submit
  const submitCreateProduct = (e) => {
    e.preventDefault();

    // validar formulario
    if (name.trim() === '' || price <= 0) {
      const alert = {
        message: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3'
      };

      dispatch(showAlertAction(alert));

      return;
    }

    dispatch(hiddenAlertAction());

    // Crear el nuevo producto
    createProduct({
      name,
      price
    });

    // Redireccionar
    navigate('/');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar nuevo producto
            </h2>

            {alert ? <p className={alert.classes}>{alert.message}</p> : null}

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

            {loading ? <p>Cargando</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center ">
                Hubo un error
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCreate;
