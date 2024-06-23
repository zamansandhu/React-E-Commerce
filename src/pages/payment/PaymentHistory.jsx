import React from 'react'
import { useGlobalCart } from '../../contexts/cart-context'

function PaymentHistory() {
    const { myOrders } = useGlobalCart
    return (
        <div className="payment-history">
            {
                myOrders.map((order) =>
                    <div className="payment">
                        <b> <p>{order.title}</p></b>
                        <p>price: Rs/-{order.price}</p>
                        <p>txNum: {order.txNum}</p>
                        <p>Shipping Address : {order.address.address}</p>
                        <p>name : {order.address.name}</p>
                        <p>name : {order.address.pincode}</p>

                    </div>)
            }
        </div>
    )
}

export default PaymentHistory
