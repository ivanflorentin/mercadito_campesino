import {SERVER_ERROR} from '../constants'


export const server_error = (response) => {
  return {
    type: SERVER_ERROR,
    response
  }
}
