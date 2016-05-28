import {CREATE_CLIENT,
	SELECT_CLIENT,
	SAVE_CLIENT} from '../constants'

const create_client = (client) => {
  return {
    type: CREATE_CLIENT,
    client
  }
}

export const add_client = (client) =>{
  return function (dispatch) {
    dispatch(create_client(client))
  }
}
export const selectClient = (client) =>{
  return {type: SELECT_CLIENT, client}
}
export const saveClient = (client) =>{
  return {type: SAVE_CLIENT, client}
}
