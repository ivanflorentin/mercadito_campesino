
import * as productReducer from './product'
import {validateProduct} from '../actions'
import {
	LOAD_PRODUCTS,
	SAVE_PRODUCT} from '../constants'

export const products = (state = [], action) =>{
  switch (action.type) {
  case LOAD_PRODUCTS: {
    return action.products
  }
  case SAVE_PRODUCT: {
    const validated = productReducer.product(
      {}, validateProduct(action.product)
      )
    if (validated.isValid) {
      return [...state, validated]
    }
    return state
  }
  default: {
    return state
  }
  }
}
