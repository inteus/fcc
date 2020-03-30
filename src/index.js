import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import OrderListContainer from './components/OrderListContainer';
import ItemListContainer from './components/ItemListContainer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/rootReducer'
import { Provider } from 'react-redux';
import { Route, HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/material-design-lite/material.min.css';
import '../node_modules/material-design-lite/material.min';

const store = createStore(
  reducers,
  compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App/>
        <Route exact path='/store' render={() => <ItemListContainer/>} />
        <Route exact path='/order' render={() => <OrderListContainer />} />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();