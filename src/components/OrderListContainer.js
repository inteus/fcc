import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToOrder, createOrder } from '../actions/order';
import OrderList from './OrderList';
import Error from '../notifications/Error';
import Preloader from '../preloader/Preloader';
import styles from './OrderList.module.css';

class OrderListContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            customer_name: '',
            customer_phone: ''
        }
    }

    changeInputHandler = event => {
        event.persist();
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }));
    }

    sendOrder = (event) => {
        event.preventDefault();
        this.props.createOrder(this.state.customer_name, this.state.customer_phone, this.props.myOrder, this.props.totalAmount)
        this.setState({ customer_name: '', customer_phone: '' });
    }

    render() {

        const list = Object.keys(localStorage).map(key => {
            const listItem = JSON.parse(localStorage.getItem(key));

            return (
                <div className={key}>
                    <p>Order №{listItem.id}</p>
                    <p>{listItem.items.map(i => <div>{i.name}: {i.count} pcs.</div>)}</p>
                    <p><li>Total: {listItem.total}$</li></p>
                    <hr />
                </div>
            );
        });

        const { myOrder, totalAmount, error, sendToggle } = this.props;
        let totalItems = myOrder.reduce((sum, item) => {
            return sum += item.count;
        }, 0);

        let order = myOrder.map(item => <OrderList {...item} key={item.id} />);

        if (error) return <Error />
        if (sendToggle) return <Preloader />

        return (
            <div>
                <div>Order list:</div>
                <form onSubmit={this.sendOrder} >
                    <div>
                        {order}
                    </div>
                    <div className={styles.itemTotalBlock}>
                        {totalItems === 0 ? `Your order list is empty!` : `You have ${totalItems} items in your order`}
                    </div>
                    <hr />
                    <div>
                        Total: {totalAmount}$
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input
                        className="mdl-textfield__input" type='text'
                        id='customer_name'
                        value={this.state.customer_name}
                        name='customer_name'
                        onChange={this.changeInputHandler} />
                        <label className="mdl-textfield__label" htmlFor="customer_name">Enter your name...</label>
                    </div>
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input
                        className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?"
                        id='customer_phone'
                        value={this.state.customer_phone}
                        name='customer_phone'
                        onChange={this.changeInputHandler} />
                        <label className="mdl-textfield__label" htmlFor="customer_phone">Enter your number...</label>
                        <span className="mdl-textfield__error">Input is not a number!</span>
                    </div>
                    <div>
                        <button
                            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"
                            disabled={totalItems > 0 ? '' : 'disabled'}
                            type='submit'>Create order</button>
                    </div>
                </form>
                <div style={{ margin: "10px" }}><b>Orders made:</b></div>
                <div style={{ margin: "10px" }}>{Object.keys(list).length === 0 ? 'No orders yet!' : list}</div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    const { myOrder, totalAmount, error, sendToggle } = state.order;
    return {
        myOrder,
        totalAmount,
        error,
        sendToggle
    }
}

export default connect(mapStateToProps,
    {
        addToOrder,
        createOrder
    })(OrderListContainer);
