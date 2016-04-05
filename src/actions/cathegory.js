'use strict'
import {CREATE_CATHEGORY} from '../constants'



export const create_cathegory = ({cathegory}) =>{
  console.log(cathegory)
    return {
      type: CREATE_CATHEGORY,
      cathegory
    }
}
