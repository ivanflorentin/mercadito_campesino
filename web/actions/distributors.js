'use strict'

import {LOAD_DISTRIBUTORS,
	ADD_DISTRIBUTOR} from '../constants'



export const load_distributors = (distributors) =>{
  return {type: LOAD_DISTRIBUTORS, distributors}
}

export const add_distributor = (distributor) =>{
  return {type: ADD_DISTRIBUTOR, distributor}
}

