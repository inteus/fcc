import React from 'react';
import st from './ItemList.module.css';

const ItemList = (props) => {

    const { name, price, quantity, id } = props;

    return (
        <div className={st.item}>
            <div className={st.item__item}>
                {name}
            </div>
            <div className={st.item__item}>
                {price} $
            </div>
            <div className={st.item__item}>
                {quantity} pcs.
            </div>
            <div className={st.item__item}><button className="btn btn-secondary" onClick={() => {
                props.removeItem(id);
                props.addToOrder(name, id, price);
            }
            } disabled={props.quantity > 0 ? '' : 'disabled'}>Add</button>
            </div>
        </div>
    )
}

export default ItemList;