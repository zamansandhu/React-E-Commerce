import React, { useEffect } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import './Checkout.css'
import { useGlobalCart } from '../../contexts/cart-context';
import Addresses from '../../components/addresses/Addresses';
import { useGlobalLogin } from '../../contexts/login-context';

function Checkout() {

    const { notifySuccess, notifyWarn } = useGlobalLogin()
    const { cartArray, addresses, editAddress, deleteAddress, formData, saveAddress, handleInputChange, editIndex, addAddress, add, setAdd, selectAddress, setCartArray, setMyOrders } = useGlobalCart()
    const selectedAddress = addresses.find((address) => address.isAddressSelected)


    const totalPrice = cartArray.length > 0 ? cartArray.reduce((acc, cur) => acc + cur.price * cur.qty, 0) : null
    const navigate = useNavigate();


    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handlePaymentSuccess = (payment) => {
        console.log("Payment Successful:", payment);
        // Perform necessary actions after successful payment  \
        notifySuccess('order successfully placed')
        cartArray.map((product) => setMyOrders((prev) => [...prev, { id: product._id, title: product.title, quantity: product.qty, price: product.price * product.qty, address: selectedAddress, txNum: payment.razorpay_payment_id }]))
        navigate('/orders')
        setCartArray([])
    };

    const handlePaymentError = (error) => {
        console.log("Payment Error:", error);
        // Handle payment errors
    };

    const makePayment = async () => {
        if (!selectedAddress) {
            notifyWarn('Choose an Address')
            return;
        }
        const options = {
            key: "rzp_test_XrHX89PF7nW09C",
            amount: totalPrice * 100,
            currency: "INR",
            name: "AnixCart",
            description: "Thank you for your test purchase",
            image: '',
            handler: handlePaymentSuccess,
            prefill: {
                name: '',
                email: '',
                contact: ''
            },
            notes: {
                address: ''
            },
            theme: {
                color: "#0C2340"
            }
        };
        // window.RazorpayCheckout.open(options);
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.on('payment.failed', handlePaymentError);
        razorpayInstance.open();
    };

    return (

        <div className='main-checkout'>
            <div className="address">
                <h1>address</h1>
                <button className='add-new-address' onClick={() => { navigate('/addresses') }}>add new address</button>
                {
                    addresses.map((address, index) =>
                        <div className='addres' onClick={() => selectAddress(index)} style={{ backgroundColor: address.isAddressSelected ? '#E5E4E2' : '', cursor: 'pointer' }}>
                            <div style={{ display: address.isAddressSelected ? 'block' : 'none' }} >
                                <input type="radio" name="" id="" checked='true' />
                            </div>
                            <p>Name : {address.name}</p>
                            <p>Mobile : {address.mobile}</p>
                            <p>Pin Code : {address.pinCode}</p>
                            <p>City : {address.city}</p>
                            <p>Address : {address.address}</p>

                            <div className="updated-address">
                                <button className='edit-address' onClick={() => { navigate('/addresses') }} >Edit</button>
                                <button className='delete-address' style={{ backgroundColor: 'red' }} onClick={() => deleteAddress(index)}>delete</button>
                            </div>

                        </div>)
                }
            </div>
            <div className="check-out">
                <h3>cart price detail</h3>
                <hr style={{ width: '100%' }} />

                {cartArray.map((item) =>
                    <p>{item.title.slice(0, 20)} ({item.qty})</p>)}
                <hr style={{ width: '100%' }} />
                <h3>total price : {totalPrice}</h3>
                <Link to={'/checkout'}>
                    <button className="checkout-btn" onClick={makePayment}  ><h4>Procced to payment</h4></button>
                </Link>
            </div>
        </div >
    )
}

export default Checkout;
