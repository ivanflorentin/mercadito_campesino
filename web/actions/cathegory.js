'use strict'
import {CREATE_CATHEGORY,
	ADD_CATHEGRORY,
	LOAD_CATHEGORIES} from '../constants'


export const add_cathegory = (cathegory)=>{
  return {type: ADD_CATHEGRORY, cathegory}
}

export const load_cathegories = (cathegories) =>{
  return {type: LOAD_CATHEGORIES, cathegories}
}

export const create_cathegory = (cathegory) =>{
  console.log(cathegory)
  return function (dispatch){
    
    //    dispatch(registrar_socio_server)
    return fetch(`/api/cathegory`, {
      method: 'POST', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
      body: JSON.stringify(cathegory)
    }).then(response =>{
      if (response.status>=400){
        //dispatch(server_error(response))
        return
      }
      return response.json()
    }).then(json =>{
      //dispatch(recibir_socio(json))
    })

  }
}
