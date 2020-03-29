import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, getItems, removeItem, setItems } from '../actions/items';
import { addToOrder } from '../actions/order';
import ItemList from './ItemList';
import Preloader from '../preloader/Preloader';
import Error from '../notifications/Error';
import styles from './ItemList.module.css'

class ItemListContainer extends Component {

    componentDidMount() {
        this.props.setItems(this.items);
    }

    render() {

        const { items, isFetching, error, removeItem, addToOrder } = this.props;
        let item = items.map(item => <ItemList {...item} key={item.id} removeItem={removeItem} addToOrder={addToOrder} />);

        if (isFetching) return <Preloader />
        if (error) return <Error />

        return (
            <div className={styles.itemsWrapper}>
                {item}
            </div>
        )

    }
}

let mapStatetoProps = (state) => {
    const { items, isFetching, error } = state.items;
    return {
        items,
        isFetching,
        error
    }
}

export default connect(mapStatetoProps,
    {
        getItems,
        removeItem,
        fetchData,
        addToOrder,
        setItems
    })(ItemListContainer);