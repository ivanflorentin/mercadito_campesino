
import {combineReducers} from 'redux'

import {server} from './server'
import {cathegories} from './cathegories'
import {clients, client} from './clients'
import {products} from './products'
import {product} from './product'
import {distributors} from './distributors'
import {producers} from './producers'
import {purchasOrders} from './purchaseOrders'


export const reducers = combineReducers({
  server,
  cathegories,
  clients,
  client,
  products,
  product,
  distributors,
  producers,
  purchasOrders
})
