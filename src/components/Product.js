import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProductToRemoveAction } from '../actions/product.actions';

const Product = ({ product }) => {
  const { id, name, price } = product;

  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  // Confirmar si desea eliminar 
  const confirmRemoveProduct = id => {
    // Preguntar al usuario

    dispatch(getProductToRemoveAction(id));
  }



  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <Link to={`product/update/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button type='button' className='btn btn-danger' onClick={confirmRemoveProduct}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Product;
