import React from 'react';
import styles from './ItemList.module.css'

const ItemList = (props) => {

    const { name, price, quantity, id } = props;

    return (
        <div className={styles.ItemContainer}>
            <div className={styles.itemName}><li>{name}</li></div>
            <div className={styles.itemPrice}>{price}$</div>
            <div className={styles.itemQty}>{quantity} pcs.</div>
            <div >
                <button className="mdl-button mdl-js-button mdl-button--fab"
                style={{width: "30px", height: "30px", minWidth: "initial"}}
                    onClick={() => {
                        props.removeItem(id);
                        props.addToOrder(name, id, price);
                    }
                    }
                    disabled={props.quantity > 0 ? '' : 'disabled'}><i className="material-icons">add</i></button>
            </div>
        </div>
    )
}

export default ItemList;