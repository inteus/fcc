import * as actions from '../actions/order';

let initialState = {
    myOrder: [],
    totalAmount: 0,
    sendToggle: false,
    error: null,
    alert: null,
    orderInfo: null
}

const orderReducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.ADD_TO_ORDER:

            const newList = state.myOrder;

            let alreadyInOrder = false;

            newList.forEach(item => {
                if (item.id === action.itemId) {
                    item.count += 1;
                    alreadyInOrder = true;
                }
            });

            if (!alreadyInOrder) {
                newList.push(
                    {
                        name: action.itemName,
                        id: action.itemId,
                        price: action.itemPrice,
                        count: 1
                    })
            }

            return {
                ...state,
                myOrder: newList,
                totalAmount: state.totalAmount + action.itemPrice
            }

        case actions.REMOVE_CART_ITEMS:
            return {
                ...state,
                myOrder: [],
                totalAmount: 0
            }

        case actions.SEND_ORDER_TOGGLE:
            return {
                ...state,
                sendToggle: action.isSending
            }

        case actions.CATCH_CART_ERROR:
                return {
                    ...state,
                    error: action.error
                }

        case actions.SHOW_ALERT:
                    return {
                        ...state, 
                        alert: action.payload}

        case actions.HIDE_ALERT:
                    return {
                        ...state, 
                        alert: null}

        case actions.SUCCESS_ALERT:
                            return {
                                ...state, 
                                orderInfo: action.text}
        case actions.HIDE_SUCCESS_ALERT:
                            return {
                                ...state, 
                                orderInfo: null}

        default:
            return state;
    }
}

export default orderReducer;