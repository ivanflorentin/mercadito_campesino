'use strict'

import {SERVER_ERROR,
	SERVER_FETCHING,
	SERVER_OK} from '../constants'


export const server_error = (response) => {
  return {
    type:SERVER_ERROR,
    response
  }
}
