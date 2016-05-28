import {
	LOAD_CLIENTS,
	SELECT_CLIENT,
	SAVE_CLIENT} from '../constants'

export const clients = (state = [], action) =>{
  switch (action.type) {
  case SAVE_CLIENT: {
    if (!action.client.index) {
      return [...state, Object.assign({}, action.client, {index: state.length})]
    }
    const next = [
      ...state.slice(0, action.client.index),
      action.client,
      ...state.slice(action.client.index + 1, state.length)
    ]
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
  switch (action.type) {
  case SELECT_CLIENT: {
    return action.client
  }
  default: return state
  }
}
