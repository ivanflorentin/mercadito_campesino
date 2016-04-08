'use strict'
import {CREATE_CLIENT,
	LOAD_CLIENTS} from '../constants'

export const clients = (state = [], action) =>{
  switch (action.type){
    case CREATE_CLIENT: {
      next_state = state.copyWithin()
      next_state.append(action.client) 
      return clients 
    }
    case LOAD_CLIENTS: {
      return action.clients
    }
    default: {
      return clients
    }
  } 
}
