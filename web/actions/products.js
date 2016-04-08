'use strict'

import {LOAD_PRODUCTS} from '../constants'


export const load_products = (products) =>{
  return {type: LOAD_PRODUCTS, products}
}
