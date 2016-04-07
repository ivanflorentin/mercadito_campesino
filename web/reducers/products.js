'use strict'

import {LOAD_PRODUCTS} from '../constants'

export const products = (state, action) =>{
  switch (action.type){
    case LOAD_PRODUCTS: {
      return action.products
    }
    default: {
      const products = [
	{id: 1, name: 'Producto 1', cathegory_id: 1,
	 unit:'kilo', buy_price: 2000, sell_price: 3000 },
	{id: 2, name: 'Producto 2', cathegory_id: 2,
	 unit:'kilo', buy_price: 2000, sell_price: 3000 },
	{id: 3, name: 'Producto 3', cathegory_id: 4,
	 unit:'kilo', buy_price: 2000, sell_price: 3000 },
	{id: 4, name: 'Producto 4', cathegory_id: 1,
	 unit:'kilo', buy_price: 2000, sell_price: 3000 },
      ]
      return products
    }
  } 

}
