import React from 'react';
import styles from './OrderList.module.css';


const OrderList = (props) => {
    return (
        <div>
            <div className={styles.orderWrapper} >
                <div className={styles.orderName} >
                    <li>{props.name}</li>
                </div>
                <div className={styles.orderQty}>
                    {props.count} pcs.
                    </div>
            </div>
        </div>
    )
}

export default OrderList;