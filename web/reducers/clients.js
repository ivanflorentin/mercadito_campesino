'use strict'
import {CREATE_CLIENT,
	LOAD_CLIENTS,
	SELECT_CLIENT,
	SAVE_CLIENT} from '../constants'

export const clients = (state = [], action) =>{
  switch (action.type){
    case SAVE_CLIENT: {
      console.log('client reducer', action)
	if (action.client.index === undefined){
	  console.log('new?', action, state, state.length)
	  return [...state, Object.assign({},action.client, {index:state.length})] 
      }
      const next = [
	...state.slice(0, action.client.index ),
	action.client,
	...state.slice(action.client.index + 1, state.length)
      ]
      console.log('next', next)
      return next
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
