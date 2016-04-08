'use strict'

import {LOAD_PRODUCTS} from '../constants'

export const products = (state = [], action) =>{
  switch (action.type){
    case LOAD_PRODUCTS: {
      return action.products
    }
    default: {
      return state
    }
  } 

}
