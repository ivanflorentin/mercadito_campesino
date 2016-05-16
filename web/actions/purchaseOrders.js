'use strict'


import {LOAD_PURCHASE_ORDERS,
	SAVE_PURCHASE_ORDER,
	CLEAR_PURCHASE_ORDER} from '../constants'

export const loadPurchaseOrders = (purchaseOrders) =>{
  return {type: LOAD_PURCHASE_ORDERS, purchasOrders}
}

export const savePurchaseOrder = (purchaseOrder) => {
  return {type: SAVE_PURCHASE_ORDER, purchaseOrder}
}

export const clearPurchaseOrder = () =>{
  return {type: CLEAR_PURCHASE_ORDER}
}
