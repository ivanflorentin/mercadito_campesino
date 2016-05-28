import {isNull, trim} from 'validator'

import {VALIDATE_PRODUCT,
	CLEAR_PRODUCT} from '../constants'

export const product = (state = {}, action) =>{
  switch (action.type) {
  case VALIDATE_PRODUCT: {
    let thisProduct = Object.assign({}, action.product)
    product.isValid = true
    if (isNull(product.name)) {
      thisProduct.name_error = 'Se necesita un nombre para el producto'
      thisProduct.isValid = false
    }
    else {thisProduct.name_error = '' }
    trim(thisProduct.name)
    return thisProduct
  }
  case CLEAR_PRODUCT: {
    return {}
  } 
  default: return state
  }
}
