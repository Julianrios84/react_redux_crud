import { useDispatch } from 'react-redux';
import { getProductToRemoveAction } from '../actions/product.actions';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";



const Product = ({ product }) => {
  const { id, name, price } = product;
  
  let navigate = useNavigate()

  // utilizar use dispatch y te crea una funcion
  const dispatch = useDispatch();

  // Confirmar si desea eliminar 
  const confirmRemoveProduct = id => {
    // Preguntar al usuario

    Swal.fire({
      title: 'Estas seguro?',
      text: "Un producto que se elimina no se puede recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(getProductToRemoveAction(id));
      }
    })

  }

  const redirectUpdate = (product) => {
    navigate(`product/update/${product.id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>
      </td>
      <td className="acciones">
        <button type='button' className="btn btn-primary mr-2" onClick={() => redirectUpdate(product)}>
          Editar
        </button>
        <button type='button' className='btn btn-danger' onClick={confirmRemoveProduct}>Eliminar</button>
      </td>
    </tr>
  );
};

export default Product;
