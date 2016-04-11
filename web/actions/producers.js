'use strict'

import { LOAD_PRODUCERS,
	 ADD_PRODUCER,
	 DELETE_PRODUCER,
	 REPLACE_PRODUCER} from '../constants'


export const load_producers = (producers) =>{
  return {type: LOAD_PRODUCERS, producers}
}

export const add_producer = (producer) =>{
  return {type: ADD_PRODUCER, producer}
}

export const delete_producer = (producer) =>{
  return {type: DELETE_PRODUCER, producer}
}

export const replace_producer = (producer) =>{
  return {type: REPLACE_PRODUCER, producer}
}
