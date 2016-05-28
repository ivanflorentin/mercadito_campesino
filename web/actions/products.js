
import {LOAD_PRODUCTS, SAVE_PRODUCT} from '../constants'


export const load_products = (products) =>{
  return {type: LOAD_PRODUCTS, products}
}
export const saveProduct = (product) =>{
  return {type: SAVE_PRODUCT, product}
}
