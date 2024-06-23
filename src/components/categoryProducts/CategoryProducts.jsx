import React, { useEffect, useState } from "react";
import "../../pages/home/main.css";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Skeleton from "@mui/material/Skeleton";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loading from "../skelton/Loading";
import { useGlobalCart } from "../../contexts/cart-context";
import { useGlobalWishlist } from "../../contexts/wishlist-context";

const CategoryProducts = ({ category, title }) => {
    const [Items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart, cartArray } = useGlobalCart();
    const [isCartDisable, setIsCartDisable] = useState(false)
    const { addToWishlist, deleteFromWishlist, wishlistArray } = useGlobalWishlist();

    const navigate = useNavigate();
    const getApiData = async () => {
        try {
            let response = await fetch(`/api/category/${category}`);
            let data = await response.json();
            setItems(data.products);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getApiData();
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    return (
        <>
            {loading ? (
                ""
            ) : (
                <div className="product-title">
                    <p style={{ backgroundColor: '#0c2340' }}>
                        <b>{title}</b>
                    </p>
                </div>
            )}
            {loading ? (
                <Loading />
            ) : (
                <div className="items">
                    {Items?.map((val) => {
                        return (
                            <div>
                                <FavoriteIcon
                                    className="fav"
                                    onClick={() =>
                                        wishlistArray.find(({ _id }) => _id === val._id)
                                            ? deleteFromWishlist(val._id)
                                            : addToWishlist(val)
                                    }
                                    style={{
                                        color: wishlistArray.find(({ _id }) => _id === val._id)
                                            ? "red"
                                            : "rgba(0,0,0,0.3)",
                                    }}
                                />
                                <div className="img-details">

                                    <NavLink to={"/single-product/" + val._id}>
                                        <div className="product-img">
                                            <img src={val.thumbnail} alt="" />
                                        </div>
                                        <div className="ind-item">
                                            <p>{val.title.slice(0, 25)}...</p>
                                            <h3>&#8377;{val.price - 10}/-  <span style={{ color: 'red', fontWeight: 'lighter' }}><s>&#8377;{val.price}</s></span></h3>
                                            <Rating
                                                name="read-only"
                                                value={val.rating}
                                                readOnly
                                                precision={0.1}
                                            />
                                        </div>
                                    </NavLink>
                                    {cartArray.find((item) => item._id === val._id) ? (
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
                                        <Button className="add-to-cart" onClick={() => {

                                            addToCart(val)
                                            setIsCartDisable(true)

                                        }}

                                        >
                                            <AddShoppingCartIcon fontSize="small" /> <b>Add To Cart</b>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default CategoryProducts;
