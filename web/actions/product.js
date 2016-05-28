
import {VALIDATE_PRODUCT,
	CLEAR_PRODUCT} from '../constants'

export const validateProduct = (product) =>{
  return {type: VALIDATE_PRODUCT, product}
}

export const clearProduct = () =>{
  return {type: CLEAR_PRODUCT}
}
