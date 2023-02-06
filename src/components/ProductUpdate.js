import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { updateProductAction } from '../actions/product.actions';

const ProductUpdate = () => {

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '', price: 0
  })

  const dispatch = useDispatch();

  // Acceder al state del store
  const update = useSelector((state) => state.products.update)

  useEffect(() => {
    setProduct(update)
  }, [update])

  const handleChange = e => {
    console.log(e.target.name, e.target.value)
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  const {id, name, price} = product;

  const submitUpdateProduct = (e) => {
    e.preventDefault()

    dispatch(updateProductAction(product))
    navigate('/')
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
                onChange={handleChange}
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
                onChange={handleChange}
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