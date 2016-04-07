'use strict'

import { combineReducers } from 'redux'

import {server} from './server'
import {cathegory} from './cathegory'
import {clients} from './clients'


export const reducers = combineReducers({
  server,
  cathegory,
  clients
})
