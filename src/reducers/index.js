'use strict'

import { combineReducers } from 'redux'

import * as server from './server'
import * as cathegory from './cathegory'

export const reducers = combineReducers({
  ...server,
  ...cathegory
})
