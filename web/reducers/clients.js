'use strict'
import {CREATE_CLIENT,
	LOAD_CLIENTS} from '../constants'

export const clients = (state, action) =>{
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
      const clients = [
	{id: '1', name: 'Cliente 1', tel:'0981 111111', distributor_id:'1' },
	{id: '2', name: 'Cliente 2', tel:'0981 222222', distributor_id:'1' },
	{id: '3', name: 'Cliente 3', tel:'0981 333333', distributor_id:'2' },
	{id: '4', name: 'Cliente 4', tel:'0981 444444', distributor_id:'3' },
	{id: '5', name: 'Cliente 5', tel:'0981 555555', distributor_id:'2' },
	{id: '6', name: 'Cliente 5', tel:'0981 666666', distributor_id:'1' },
      ]
      return clients
    }
  } 

}
