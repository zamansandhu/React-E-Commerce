import React from "react";
import { useGlobalWishlist } from "../../contexts/wishlist-context";
import { useGlobalCart } from "../../contexts/cart-context";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import { useGlobalLogin } from "../../contexts/login-context";
import { useState } from "react";


const ProductCard = ({ product }) => {
    const { addToCart, cartArray } = useGlobalCart();
    const [isCartDisable, setIsCartDisable] = useState(false)
    const { addToWishlist, wishlistArray, deleteFromWishlist } =
        useGlobalWishlist();


    const navigate = useNavigate();

    return (

        <div className="product-card">

            <FavoriteIcon
                className="fav"
                onClick={() =>
                    wishlistArray.find(({ _id }) => _id === product._id)
                        ? deleteFromWishlist(product._id)
                        : addToWishlist(product)
                }
                style={{
                    color: wishlistArray.find(({ _id }) => _id === product._id)
                        ? "red"
                        : "rgba(0,0,0,0.3)",
                }}
            />
            <div className="img-details">
                <NavLink to={"/single-product/" + product._id}>
                    <div className="product-img">
                        <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="ind-item">
                        <p>{product.title.slice(0, 25)}...</p>
                        <h3>&#8377;{product.price}/-</h3>
                        <Rating
                            name="read-only"
                            value={product.rating}
                            readOnly
                            precision={0.1}
                        />
                    </div>
                </NavLink>
                {cartArray.find((item) => item._id === product._id) ? (
                    <Button
                        className="add-to-cart"
                        onClick={() => {
                            navigate("/Cart");
                        }}
                    >
                        <ShoppingCartCheckoutIcon fontSize="small" />
                        <b>Go To Cart</b>
                    </Button>
                ) : (
                    <Button disabled={isCartDisable} className="add-to-cart" onClick={() => {
                        addToCart(product)
                        setIsCartDisable(true)


                    }}>
                        <AddShoppingCartIcon fontSize="small" /> <b>Add To Cart</b>
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
