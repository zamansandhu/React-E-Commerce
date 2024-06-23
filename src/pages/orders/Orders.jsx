import React from 'react'
import Orders from './Orders.css'
import { useGlobalCart } from '../../contexts/cart-context';
import { Link } from 'react-router-dom';



function Order() {
    const { myOrders } = useGlobalCart();
    return (
        <div className="my-orders-main">
            <h1>my orders   </h1>

            {myOrders.length ?
                (myOrders.map((order) =>
                    <Link to={"/single-product/" + order.id}>
                        <div className="orders" style={{ cursor: 'pointer' }} >
                            <b><h2>purchaser : {order.address.name}</h2></b>
                            <b> <p>{order.title}</p></b>
                            <p>price: Rs/-{order.price}</p>
                            <p>Quantity : {order.quantity}</p>
                            <p>Address: {order.address.address}</p>
                            <p>mobile num : {order.address.address}</p>

                        </div>
                    </Link>)) : <div className="no-order-found">
                    <h1>No order Found </h1>
                    <Link to={'/shop'}>
                        <button className='go-to-shop' >Go to shop</button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Order
