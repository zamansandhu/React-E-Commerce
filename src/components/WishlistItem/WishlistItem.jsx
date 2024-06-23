import React, { useState, useEffect } from "react";
import "./WishlistItem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useGlobalCart } from "../../contexts/cart-context";
import { useGlobalWishlist } from "../../contexts/wishlist-context";

const WishlistItem = ({ product }) => {
    const { deleteFromWishlist } = useGlobalWishlist();
    const { cartArray, addToCart } = useGlobalCart();

    return (
        product && (
            <>
                <div className="cart-item">
                    <div className="item2">
                        <div className="img ">
                            <img src={product.thumbnail} alt="" />
                        </div>
                        <div className="tile ">{product.title}</div>
                        <div className="quantity">
                            <select name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                        </div>
                        <div className="price ">&#8377;1{product.price}</div>

                        <div className="delete" >
                            <DeleteIcon onClick={() => deleteFromWishlist(product._id)} />
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default WishlistItem;
