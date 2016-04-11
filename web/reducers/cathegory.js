'use strict'

import {CREATE_CATHEGORY} from '../constants/index'

export const cathegory = (state = [], action) => { 
  switch (action.type){
    case CREATE_CATHEGORY: {
      return [ ...state, action.cathegory]
    }
    default: {
      return state
    }
  }
}
