'use strict'

import {CREATE_CATHEGORY} from '../constants/index'

export const cathegories = (state, action) => { 
  switch (action.type){
    case CREATE_CATHEGORY: {
      return Object.assign({}, state, {cathegory: action.cathegory})
    }
    default: {
      const cathegories = [
	{id: 1, name: 'Categoria 1'},
	{id: 2, name: 'Categoria 2'},
	{id: 3, name: 'Categoria 3'},
	{id: 4, name: 'Categoria 4'},
	{id: 5, name: 'Categoria 5'},
      ]
      return cathegories
    }
  }
}
