import * as actions from '../actions/order';

let initialState = {
    myOrder: [],
    totalAmount: 0,
    sendToggle: false,
    error: null
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

        default:
            return state;
    }
}

export default orderReducer;