'use strict'

import {LOAD_DISTRIBUTORS,
	ADD_DISTRIBUTOR} from '../constants'

export const distributors = (state = [], action)=>{
  switch (action.type){
    case LOAD_DISTRIBUTORS:{
      return action.distributors
    }
    case ADD_DISTRIBUTOR: {
      return [...state, action.distributor]
    }
    default:{
      return state
    }
  }
}
