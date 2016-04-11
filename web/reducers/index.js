'use strict'

import { combineReducers } from 'redux'

import {server} from './server'
import {cathegories} from './cathegories'
import {clients} from './clients'
import {products} from './products'
import {product} from './product'
import {distributors} from './distributors'
import {producers} from './producers'

export const reducers = combineReducers({
  server,
  cathegories,
  clients,
  products,
  product,
  distributors,
  producers
})
