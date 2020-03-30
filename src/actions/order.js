import Axios from 'axios';
import { setItems } from './items';

export const ADD_TO_ORDER = "ADD_TO_ORDER";
export const SEND_ORDER_TOGGLE = "SEND_ORDER_TOGGLE";
export const CLEAR_CART = "CLEAR_CART";
export const CATCH_CART_ERROR = "CATCH_CART_ERROR";

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
export const clearCart = () => ({
    type: CLEAR_CART
})
export const catchCartError = (error) => ({
    type: CATCH_CART_ERROR,
    error
})

export const createOrder = (name, phone, order, total) => {
    return (dispatch) => {
        dispatch(sendToggle(true));
        Axios.post('https://5e2df3533b0d640014be10a0.mockapi.io/api/v1/order', {
            //id: Date.now().toString(),
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
                alert(`Заказ №${response.data.id} отправлен. Время создания: ${Date().toString()}!`);
                dispatch(setItems());
            })
            .catch((error) => {
                dispatch(catchCartError(error));
            });
    }
}

