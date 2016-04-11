'use strict'
import {isNull, trim} from 'validator'

import {VALIDATE_PRODUCT} from '../constants'

export const product = (state = {}, action) =>{
  switch (action.type){
    case VALIDATE_PRODUCT: {
	let product = Object.assign({}, action.product)
	product.isValid = true
	if (isNull(product.name)){
	  product.name_error = 'Se necesita un nombre para el producto'
	  product.isValid = false
	}
      else{product.name_error = '' }
      trim(product.name)
	return product
    }
    default: return state
  }
}
