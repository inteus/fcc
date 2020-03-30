import React from 'react';
import OrderListContainer from './OrderListContainer';
import ItemListContainer from './ItemListContainer';

import styles from './App.module.css';

const App = () => {
    return (
        <div className={styles.appWrapper}>
            <div className={styles.itemWrapper} >
                <ItemListContainer />
            </div>
            <div className={styles.orderWrapper}>
                <OrderListContainer />
            </div>

        </div>
    );
}

export default App;