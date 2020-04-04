import React from 'react';
import OrderListContainer from './OrderListContainer';
import ItemListContainer from './ItemListContainer';
import st from './App.module.css';

const App = () => {
    return (
        <div className={st.appWrapper}>
            <div><ItemListContainer /></div>
            <div><OrderListContainer /></div>
        </div>
    );
}

export default App;