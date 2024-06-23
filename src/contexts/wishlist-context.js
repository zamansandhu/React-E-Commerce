import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGlobalLogin } from "./login-context";

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {
    const [wishlistArray, setWishlistArray] = useState([]);
    const { notifyWarn, notifySuccess } = useGlobalLogin()

    const navigate = useNavigate();

    const addToWishlist = async (product) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.post(
                `/api/user/wishlist`,
                { product },
                { headers: { authorization: encodedToken } }
            );
            setWishlistArray(data.wishlist);
            notifySuccess('Added to Wishlist')
        } catch (err) {
            navigate('/sign')
            notifyWarn('please login to add items')
        }
    };

    const deleteFromWishlist = async (id) => {
        const encodedToken = localStorage.getItem('anixCartUserToken')
        try {
            const { data } = await axios.delete(`/api/user/wishlist/${id}`, {
                headers: { authorization: encodedToken }
            })

            setWishlistArray(data.wishlist)
            notifySuccess('Deleted from Wishlist')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <wishlistContext.Provider
            value={{
                wishlistArray,
                setWishlistArray,
                addToWishlist,
                deleteFromWishlist,
            }}
        >
            {children}
        </wishlistContext.Provider>
    );
};

const useGlobalWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useGlobalWishlist };
