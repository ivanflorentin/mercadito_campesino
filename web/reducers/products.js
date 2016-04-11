'use strict'
import *  as productReducer  from './product'
import {validateProduct} from '../actions'
import {VALIDATE_PRODUCT,
	LOAD_PRODUCTS,
	SAVE_PRODUCT} from '../constants'

export const products = (state = [], action) =>{
  switch (action.type){
    case LOAD_PRODUCTS: {
      return action.products
    }
    case SAVE_PRODUCT: {
      const validated = productReducer.product({},
		{type: VALIDATE_PRODUCT, product: action.product})
      if (validated.isValid){
	return [...state, validated]
      }
      return state
    }
    default: {
      return state
    }
  } 

}
