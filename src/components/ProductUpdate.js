import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductAction } from '../actions/product.actions';

const ProductUpdate = () => {

  const [product, setProduct] = useState({
    name: '', price: 0
  })

  // Acceder al state del store
  const update = useSelector((state) => state.products.update)

  useEffect(() => {
    setProduct(update)
  }, [update])

  const handleChange = e => {
    setProduct({
      ...product,
      [e.targe.name]: e.targe.value
    })
  }

  const {id, name, price} = update;

  const submitUpdateProduct = (e) => {
    e.preventDefault()
  }


  return (
    <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold">
            Editar producto
          </h2>
          <form onSubmit={submitUpdateProduct}>
            <div className="form-group">
              <label htmlFor="">Nombre producto</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre producto"
                name="name"
                value={name}
                onChange={ e => handleChange(e)}
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
                onChange={ e => handleChange(e)}
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