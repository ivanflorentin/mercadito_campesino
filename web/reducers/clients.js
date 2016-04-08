'use strict'
import {CREATE_CLIENT,
	LOAD_CLIENTS} from '../constants'

export const clients = (state = [], action) =>{
  switch (action.type){
    case CREATE_CLIENT: {
      return [...state, action.client] 
    }
    case LOAD_CLIENTS: {
      return action.clients
    }
    default: {
      return state
    }
  } 
}
