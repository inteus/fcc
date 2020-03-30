import Axios from 'axios';

export const GET_ITEMS = "GET_ITEMS";
export const FETCH_DATA = "FETCH_DATA";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CATCH_ERROR = "CATCH_ERROR";

export const getItems = (items) => ({
    type: GET_ITEMS,
    items
});

export const fetchData = (isFetching) => ({
    type: FETCH_DATA,
    isFetching
});

export const removeItem = (itemId) => ({
    type: REMOVE_ITEM,
    itemId
})

export const catchError = (error) => ({
    type: CATCH_ERROR,
    error
})

export const setItems = () => {
    return (dispatch) => {
        dispatch(fetchData(true));
        Axios.get('http://5e2df3533b0d640014be10a0.mockapi.io/api/v1/items')
            .then(res => {
                dispatch(getItems(res.data));
                dispatch(fetchData(false));
            })
            .catch((error) => {
                dispatch(catchError(error));
                dispatch(fetchData(false));
            });
    }
}