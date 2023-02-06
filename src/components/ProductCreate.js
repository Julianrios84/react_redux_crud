import { useDispatch, useSelector } from 'react-redux';
import { createProductAction } from '../actions/product.actions';

const ProductCreate = () => {

  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch()
  // mandar llammar el action de createProductAction
  const createProduct = () => dispatch(createProductAction())
  // cuando el usuario haga submit
  const submitCreateProduct = (e) => {
    e.preventDefault();


    // Crear el nuevo producto
    createProduct();
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
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Precio producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio producto"
                  name="price"
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
