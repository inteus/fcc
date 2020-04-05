import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToOrder, createOrder, showAlert, clearCart } from '../actions/order';
import OrderList from './OrderList';
import Error from '../notifications/Error';
import Alert from '../notifications/Alert';
import Preloader from '../preloader/Preloader';
import st from './OrderList.module.css';

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
                    <p><u><i>Order №{listItem.id}</i></u></p>
                    <p>{listItem.items.map(i => <div>{i.name}: {i.count} pcs.</div>)}</p>
                    <p><i>Total :</i> <b>{listItem.total} $</b></p>
                    <hr />
                </div>
            );
        });

        const { myOrder, totalAmount, error, sendToggle } = this.props;
        // let totalItems = myOrder.reduce((sum, item) => {
        //     return sum += item.count;
        // }, 0);

        let order = myOrder.map(item => <OrderList {...item} key={item.id} />);

        if (error) return <Error />
        if (sendToggle) return <Preloader />

        return (
            <div>
                <form onSubmit={this.sendOrder}>
                    {this.props.alert && <Alert text={this.props.alert} />}
                    <div className={st.order__container}>
                        <div className={st.order__list}>
                            <div>
                                {(!order.length) ? 'Your order list is empty!' : order}
                            </div>
                            <hr />
                            <div className={st.order__list__total}>
                                <i>Total :</i> <b>{totalAmount} $</b>
                            </div>
                            <div>
                            </div>
                        </div>
                        {/* <div>{totalItems === 0 ? `Your order list is empty!` : `You have ${totalItems} items in your order`}</div> */}
                        <div>
                            <div className={st.order__detail}>Name: <input
                                className="form-control" type='text'
                                id='customer_name'
                                value={this.state.customer_name}
                                name='customer_name'
                                onChange={this.changeInputHandler} />
                            </div>
                            <div className={st.order__detail}>Phone: <input
                                className="form-control"
                                type="text"
                                id='customer_phone'
                                value={this.state.customer_phone}
                                name='customer_phone'
                                onChange={this.changeInputHandler} />
                            </div>
                            <div className={st.order__detail}>
                                <button className="btn btn-success" disabled={(order.length) ? '' : 'disabled'} type='submit' >Create order</button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className={st.order__list__btn}>
                    <button className="btn btn-primary"
                        onClick={this.props.clearCart} disabled={myOrder.length ? '' : 'disabled'}>Clear cart</button>
                </div>
                <div className={st.order__made__total}>
                    <div className={st.order__made__total__header}><b>List of orders you made:</b></div>
                    <div className={st.order__made__total__header}>{Object.keys(list).length === 0 ? 'No orders yet!' : list}</div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    const { myOrder, totalAmount, error, alert, sendToggle } = state.order;
    return {
        myOrder,
        totalAmount,
        error,
        sendToggle,
        alert
    }
}

export default connect(mapStateToProps,
    {
        addToOrder,
        createOrder,
        showAlert,
        clearCart
    })(OrderListContainer);
