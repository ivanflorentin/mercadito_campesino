'use strict'

import {CREATE_CLIENT} from '../constants'

const create_client = (client) => {
  return {
    type: CREATE_CLIENT,
    client
  } 
}


export const add_client = (client) =>{
  return function(dispatch){
    dispatch(create_client(client))
  }  

}
