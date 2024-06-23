import React from "react";
import "./cart.css";
import { useGlobalCart } from "../../contexts/cart-context";
import ProductCard from "../../components/productCard/ProductCard";
import Cartitem from "../../components/cartItem/Cartitem";
import { Link } from "react-router-dom";
import { useGlobalLogin } from "../../contexts/login-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function WishlistPage() {
    const { cartArray, setCartArray } = useGlobalCart()
    const { userToken } = useGlobalLogin()
    const totalPrice = cartArray.length > 0 ? cartArray.reduce((acc, cur) => acc + cur.price * cur.qty, 0) : null
    const navigate = useNavigate()
    function AuthHandler() {
        navigate('/sign')
        setCartArray([])
    }

    return (
        !userToken ?
            AuthHandler()
            :
            <>
                <div className="main">
                    <div className="header">
                        <h2>My cart</h2>


                    </div>
                    {
                        cartArray.length === 0 ? <div className="empty-cart"  >
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="" />


                            <Link to={'/shop'}>
                                <button><h3>Shop now</h3></button>
                            </Link>




                        </div> : <h2>{cartArray.length} items in cart </h2>
                    }

                    <div className="main-cart-item">
                        <div> {cartArray.map((product) => {
                            return <Cartitem product={product} />;
                        })}</div>

                        {cartArray.length !== 0 && <div className="checkout">
                            <h3>cart price detail</h3>
                            <hr style={{ width: '100%' }} />

                            {cartArray.map((item) =>
                                <p>{item.title.slice(0, 20)} ({item.qty})</p>)}
                            <hr style={{ width: '100%' }} />
                            <h3>total price : {totalPrice}</h3>
                            <Link to={'/checkout'}>
                                <button className="check"><h4>checkout</h4></button>
                            </Link>
                        </div>

                        }
                    </div>
                </div>
            </>
    );
}

export default WishlistPage;
