import { LineAxisOutlined } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "../singleProduct/Discription.css";
import Button from "@mui/material/Button";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import PercentIcon from "@mui/icons-material/Percent";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Rating from "@mui/material/Rating";
import DiscountIcon from "@mui/icons-material/Discount";
import { useGlobalCart } from "../../contexts/cart-context";
import { useGlobalWishlist } from "../../contexts/wishlist-context";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Discription() {
    const [productDetail, setProductDetail] = useState();
    const [mainImage, setMainImage] = useState(null);
    const [isCartDisable, setIsCartDisable] = useState(false)

    const { cartArray, addToCart } = useGlobalCart();
    const { wishlistArray, addToWishlist, deleteFromWishlist } =
        useGlobalWishlist();

    const navigate = useNavigate();

    const { id } = useParams();

    const getProductDetail = async (id) => {
        let res = await fetch(`/api/products/${id}`);
        let data = await res.json();
        setProductDetail(data.product);
        setMainImage(data?.product?.thumbnail);
    };

    useEffect(() => {
        getProductDetail(id);
        window.scrollTo({ top: 0, left: 0 });
    }, [id]);

    return (

        productDetail ? (
            <>
                <div className="header">
                    <div className="heading"></div>
                </div>

                <div className="main-dis">
                    <div className="left-dis">
                        {/*  */}
                        <div className="left">
                            {productDetail.images.map((img) => {
                                return (
                                    <img
                                        onMouseOver={() => setMainImage(img)}
                                        src={img}
                                        alt=""
                                        className="prev-img"
                                    />
                                );
                            })}
                        </div>

                        <div className="main-img">
                            <img src={mainImage} alt="" />
                        </div>
                    </div>

                    <div className="right-dis">
                        <div className="dis">
                            <div className="title2">
                                <h1>{productDetail.title}</h1>
                                <p>
                                    <b>Brand </b>: {productDetail.brand}
                                </p>
                                <p>
                                    <b>Description</b> : {productDetail.description}
                                </p>
                                <p>

                                    <Rating
                                        name="read-only"
                                        value={productDetail.rating}
                                        readOnly
                                        precision={0.1}
                                        className="rating"
                                    />
                                </p>
                                <h2>Deal of the day</h2>
                                <span style={{ color: "red" }}>

                                    <s>
                                        <h3>1167</h3>
                                    </s>
                                </span>

                                <h1 style={{ color: "green" }}>
                                    &#x20B9;{productDetail.price}/-
                                </h1>
                            </div>

                            <div className="offer">
                                <div>
                                    <h2>
                                        <DiscountIcon className="percent" />
                                        Offers
                                    </h2>
                                    <p>

                                        <LocalOfferIcon className="off" />
                                        Bank Offer {productDetail.discountPercentage}% Cashback on Anix-cart Axis Bank Card T&C
                                    </p>
                                    <p>
                                        <LocalOfferIcon className="off" />
                                        Buy this Product and Get Extra ₹500 Off on Two-Wheelers T&C
                                    </p>
                                    <p>
                                        <LocalOfferIcon className="off" />
                                        Partner Offer Purchase now & get a surprise cashback coupon
                                        for January / February 2023 Know More
                                    </p>
                                    <p>
                                        <LocalOfferIcon className="off" />
                                        Partner Offer Sign up for Anix-cart Pay Later and get
                                        Anix-cart Gift Card worth up to ₹1000* Know More
                                    </p>
                                </div>
                            </div>
                            <div className="btn-1">

                                {cartArray.find((item) => item._id === productDetail._id) ? (
                                    <Button
                                        className="add-to-cart"
                                        onClick={() => {
                                            navigate("/Cart");
                                        }}
                                    >
                                        <ShoppingCartCheckoutIcon fontSize="large" />
                                        <b>Go To Cart</b>
                                    </Button>
                                ) : (
                                    <Button disabled={isCartDisable}
                                        className="add-to-cart"
                                        onClick={() => {
                                            addToCart(productDetail)
                                            setIsCartDisable(true)


                                        }}
                                    >

                                        <AddShoppingCartIcon fontSize="large" /> <b>Add To Cart</b>
                                    </Button>
                                )}
                                {wishlistArray.find((item) => item._id === productDetail._id) ? (
                                    <Button
                                        className="add-to-cart"
                                        onClick={() => {
                                            navigate("/wishlist");
                                        }}
                                    >
                                        <FavoriteIcon fontSize="large" style={{ color: 'red' }} />
                                        <b>Go To wishlist </b>
                                    </Button>
                                ) : (
                                    <Button
                                        className="add-to-cart"
                                        onClick={() => addToWishlist(productDetail)}
                                    >

                                        <FavoriteBorderIcon fontSize="large" /> <b>Add To wishlist</b>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
            </>
        ) : <div className="loading">
            <div className="loading-left">
                <div className="left-img">
                    <Skeleton className="ske-left" variant="rectangular" width={100} height={100} />
                    <Skeleton className="ske-left" variant="rectangular" width={100} height={100} />
                    <Skeleton className="ske-left" variant="rectangular" width={100} height={100} />
                    <Skeleton className="ske-left" variant="rectangular" width={100} height={100} />
                </div>
                <div className="main-img">
                    <Skeleton className="ske" variant="rectangular" width={500} height={400} />
                </div>
            </div>
            <div className="loading-right">
                <Skeleton className="ske-right" variant="rounded" width={300} height={40} />
                <Skeleton className="ske-right" variant="rounded" width={300} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={800} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={200} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={200} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={300} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={200} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={700} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={600} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={500} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={700} height={20} />
                <Skeleton className="ske-right" variant="rounded" width={600} height={20} />
            </div>


        </div>
    );
}
