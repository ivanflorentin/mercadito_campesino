'use strict'

import {SELECT_CLIENT} from '../constants'

export const client = (state = {}, action) => {
  switch (action.type){
    case SELECT_CLIENT: {
      return action.client
    }
    default: return state
  }
}
