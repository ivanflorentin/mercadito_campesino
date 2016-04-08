'use strict'


import {LOAD_PRODUCERS,
	ADD_PRODUCER,
	DELETE_PRODUCER,
	REPLACE_PRODUCER} from '../constants'

export const producers = (state = [], action)=>{
  switch (action.type){
    case LOAD_PRODUCERS:{
      return action.producers
    }
    case ADD_PRODUCER: {
      const next_state = [ ...state, action.producer ]
      return next_state
    }
    default:{
      return state
    }
  }
}
