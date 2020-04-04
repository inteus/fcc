import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData, getItems, removeItem, setItems } from '../actions/items';
import { addToOrder } from '../actions/order';
import ItemList from './ItemList';
import Preloader from '../preloader/Preloader';
import Error from '../notifications/Error';
import st from './ItemList.module.css';

class ItemListContainer extends Component {

    componentDidMount() {
        this.props.setItems(this.items);
    }

    render() {

        const { items, isFetching, error, removeItem, addToOrder } = this.props;

        let item = items.map(item => <ItemList
            {...item}
            key={item.id}
            removeItem={removeItem}
            addToOrder={addToOrder} />);

        if (isFetching) return <Preloader />
        if (error) return <Error />

        return (
            <div className={st.itemsListWrapper}>
                <div className={st.itemsTitleWrapper}>
                    <div className={st.item__title}>Title</div>
                    <div className={st.item__title}>Cost</div>
                    <div className={st.item__title}>Qty</div>
                    <div className={st.item__title}>Add to cart</div>
                </div>
                <div>
                    {item}
                </div>
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