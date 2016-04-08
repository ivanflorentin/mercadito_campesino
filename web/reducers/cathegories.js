'use strict'

import {LOAD_CATHEGORIES,
	ADD_CATHEGRORY} from '../constants/index'


export const cathegories = (state = [], action) => { 
  switch (action.type){
    case ADD_CATHEGRORY: {
      return [...state, action.cathegory]
    }
    case LOAD_CATHEGORIES: {
      return action.cathegories
    }
    default: {
      return state
    }
  }
}
