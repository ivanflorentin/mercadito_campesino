'use strict'

import {LOAD_DISTRIBUTORS,
	ADD_DISTRIBUTORS} from '../constants'

export const distributors = (state = [], action)=>{
  switch (action.type){
    case LOAD_DISTRIBUTORS:{
      return action.distributors
    }
    default:{
      const distributors = [
	{id: 1, name: 'Distribuidor 1'},	
	{id: 2, name: 'Distribuidor 2'},
	{id: 3, name: 'Distribuidor 3'},
	{id: 4, name: 'Distribuidor 4'}
      ]
      return distributors
    }
  }
}
