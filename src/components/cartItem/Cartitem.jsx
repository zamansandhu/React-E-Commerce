import React, { useState, useEffect } from "react";
import "./CartItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalCart } from "../../contexts/cart-context";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useGlobalWishlist } from "../../contexts/wishlist-context";
import Counter from "./Counter";

const Cartitem = ({ product }) => {
    const { deleteFromCart, cartArray, quantity } = useGlobalCart();
    const { addToWishlist, wishlistArray, deleteFromWishlist } = useGlobalWishlist();



    return (
        product && (
            <>
                <div className="cart">
                    <div className="cart-item">
                        <FavoriteIcon onClick={() => wishlistArray.find(({ _id }) => _id === product._id) ? deleteFromWishlist(product._id) : addToWishlist(product)} style={{
                            position: 'relative', top: '-80px', cursor: 'pointer', color: wishlistArray.find(({ _id }) => _id === product._id)
                                ? "red"
                                : "rgba(0,0,0,0.3)"
                        }} />

                        <NavLink to={"/single-product/" + product._id}>
                            <img src={product.thumbnail} alt="" style={{ height: '180px' }} />
                        </NavLink>
                        <div className="cart-item-detail">
                            <p><b>{product.title.slice(0, 12)}...</b>
                            </p>
                            <p> Price : {product.price}</p>
                            <p>Stock : {product.stock}</p>
                            <Counter qty={product.qty} id={product._id} />
                            <button className="remove-cart" onClick={() => deleteFromCart(product._id)} ><DeleteIcon /><b style={{ position: 'relative', bottom: '5px' }} >Remove</b></button>
                        </div>

                    </div>

                </div>
            </>
        )

        // onClick={() => deleteCart(cartProduct.id)}
    );
};

export default Cartitem;

{
    /* <div className="delete" onClick={() => deleteFromCart(item._id)}>
                          <DeleteIcon />
                      </div> */
}
