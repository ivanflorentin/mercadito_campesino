'use strict'
import {CREATE_CLIENT,
	LOAD_CLIENTS,
	SELECT_CLIENT} from '../constants'

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



export const client = (state = {}, action) => {
  switch (action.type){
    case SELECT_CLIENT: {
      return action.client
    }
    default: return state
  }
}
