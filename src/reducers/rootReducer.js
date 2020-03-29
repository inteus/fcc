import { combineReducers } from 'redux';
import itemsReducer from '../reducers/items';
import orderReducer from '../reducers/order';

const reducers = combineReducers({
    items: itemsReducer,
    order: orderReducer
});

export default reducers;

