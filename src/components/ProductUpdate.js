import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const ProductUpdate = () => {

  let navigate = useNavigate()
  // Acceder al state del store
  const update = useSelector((state) => state.products.update)
  if(!update)  {
    return null;
  }

  const {id, name, price} = update;
  return (
    <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold">
            Editar producto
          </h2>
          <form className="">
            <div className="form-group">
              <label htmlFor="">Nombre producto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre producto"
                name="name"
                value={name}
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
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
            >
              Guardar cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductUpdate