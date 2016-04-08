'use strict'


import {LOAD_PRODUCERS} from '../constants'

export const producers = (state = [], action)=>{
  switch (action.type){
    case LOAD_PRODUCERS:{
      return action.producers
    }
    default:{
      const producers = [
	{id: 1, name: 'Productor 1'},	
	{id: 2, name: 'Productor 2'},
	{id: 3, name: 'Productor 3'},
	{id: 4, name: 'Productor 4'}
      ]
      return producers
    }
  }
}
