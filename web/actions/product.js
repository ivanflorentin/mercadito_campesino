'use strict'

import {VALIDATE_PRODUCT} from '../constants'

export const validateProduct = (product) =>{
  return {type: VALIDATE_PRODUCT, product}
}
