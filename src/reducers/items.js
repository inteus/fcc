import * as actions from '../actions/items';

let initialState = {
    items: [],
    isFetching: true,
    error: null
}

const itemsReducer = (state = initialState, action) => {

    switch (action.type) {

        case actions.GET_ITEMS:
            return {
                ...state,
                items: action.items
            }

        case actions.FETCH_DATA:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case actions.REMOVE_ITEM:

            const newList = state.items.map(item => (item.id === action.itemId) ? { ...item, quantity: item.quantity - 1 } : item);

            return {
                ...state,
                items: newList
            }

        case actions.CATCH_ERROR:
            return {
                ...state,
                error: action.error
            }

        default:
            return state;
    }
}

export default itemsReducer;