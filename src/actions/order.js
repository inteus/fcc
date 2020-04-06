import Axios from 'axios';
import { setItems } from './items';

export const ADD_TO_ORDER = "ADD_TO_ORDER";
export const SEND_ORDER_TOGGLE = "SEND_ORDER_TOGGLE";
export const REMOVE_CART_ITEMS = "REMOVE_CART_ITEMS";
export const CATCH_CART_ERROR = "CATCH_CART_ERROR";
export const SHOW_ALERT = "SHOW_ALERT";
export const HIDE_ALERT = "HIDE_ALERT";
export const SUCCESS_ALERT = "SUCCESS_ALERT";
export const HIDE_SUCCESS_ALERT = "HIDE_SUCCESS_ALERT";

export const addToOrder = (itemName, itemId, itemPrice) => ({
  type: ADD_TO_ORDER,
  itemName,
  itemId,
  itemPrice
})

export const sendToggle = (isSending) => ({
  type: SEND_ORDER_TOGGLE,
  isSending
})

export const removeItems = () => ({
  type: REMOVE_CART_ITEMS
})

export const catchCartError = (error) => ({
  type: CATCH_CART_ERROR,
  error
})

export function showAlert(text) {
  return dispatch => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    setTimeout(() => {
      dispatch(hideAlert())
    }, 4000)
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export const successAlert = (text) => ({
  type: SUCCESS_ALERT,
  text
})

export function hideSuccessAlert() {
  return {
    type: HIDE_SUCCESS_ALERT
  }
}

export const createOrder = (name, phone, order, total) => {
  return (dispatch) => {
    if (!name.trim() || !phone.trim()) {
      return dispatch(showAlert('You must fill out all the contact fields!'));
    }
    dispatch(sendToggle(true));
    Axios.post('https://5e2df3533b0d640014be10a0.mockapi.io/api/v1/order', {
      customer_name: name,
      customer_phone: phone,
      customer_order: order,
      total_amount: total
    })
      .then((response) => {
        console.log(response);
        const order = {
          id: response.data.id,
          items: response.data.customer_order,
          total: response.data.total_amount
        };
        const key = Date.now().toString()
        localStorage.setItem(key, JSON.stringify(order));
        dispatch(sendToggle(false));
        dispatch(clearCart());
        dispatch(successAlert(`Order №${response.data.id} sent! Create time: ${Date().toString().slice(0, 24)}`));
        dispatch(setItems());
      })
      .catch((error) => {
        dispatch(catchCartError(error));
      });
  }
}

export const clearCart = () => {
  return (dispatch) => {
    dispatch(removeItems());
    dispatch(setItems());
  }
}

