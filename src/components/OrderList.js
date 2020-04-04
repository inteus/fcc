import React from 'react';
import st from './OrderList.module.css';

const OrderList = (props) => {
    return (
        <div className={st.order__list__item}>
                <div>{props.name}</div>
                <div>{props.count} pcs.</div>
        </div>
    )
}

export default OrderList;