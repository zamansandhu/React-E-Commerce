import React, { useEffect, useState } from "react";
import "../../pages/home/main.css";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Skeleton from "@mui/material/Skeleton";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import FavoriteIcon from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import Loading from "../skelton/Loading";
import { useGlobalCart } from "../../contexts/cart-context";
import { useGlobalWishlist } from "../../contexts/wishlist-context";

const Topdeals = ({ category, title }) => {
    const [Items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { addToCart } = useGlobalCart();
    const { addToWishlist, wishlistArray, deleteFromWishlist } = useGlobalWishlist();

    const getApiData = async () => {
        setLoading(true);
        try {
            let response = await fetch(`/api/category/${category}`);
            let data = await response.json();
            setItems(data.products);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <>
            <h4 style={{ backgroundColor: 'red', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '200px', borderRadius: '0px 50px 50px 0px', color: 'white' }}>Best deals</h4>


            {loading ? (
                <Loading />
            ) : (


                <div className="items">
                    {Items?.map((val) => {
                        return (
                            <div>

                                <FavoriteIcon
                                    className="fav"
                                    onClick={() => wishlistArray.find(({ _id }) => _id === val._id) ? deleteFromWishlist(val._id) : addToWishlist(val)}

                                    style={{
                                        color: wishlistArray.find(({ _id }) => _id === val._id)
                                            ? "red"
                                            : "rgba(0,0,0,0.3)",
                                    }}
                                />

                                <div className="img-details">
                                    {/* <img src="https://png.pngtree.com/png-vector/20200221/ourlarge/pngtree-flash-sale-badge-png-image_2151329.jpg" alt="" style={{ height: '40px' }} /> */}


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
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Topdeals;
