
import {LOAD_PURCHASE_ORDERS,
	SAVE_PURCHASE_ORDER} from '../constants'

export const purchaseOrders = (state = [], action) => {
  switch (action.type) {
  case LOAD_PURCHASE_ORDERS: {
    return action.purchasOrders
  }
  case SAVE_PURCHASE_ORDER: {
    return [...state, action.purchasOrder]
  }
  default: return state
  }
}
