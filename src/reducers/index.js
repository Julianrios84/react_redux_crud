import { combineReducers } from 'redux'
import productReducer from './product.reducer'
import alertReducer from './alert.reducer'

export default combineReducers({
  products: productReducer,
  alert: alertReducer
})