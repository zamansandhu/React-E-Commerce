import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useGlobalLogin } from "./login-context";
const cartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartArray, setCartArray] = useState([]);
    const [myOrders, setMyOrders] = useState([])
    const { notifySuccess, notifyWarn } = useGlobalLogin();
    const [add, setAdd] = useState(false)
    const [addresses, setAddresses] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        pinCode: '',
        city: '',
        address: '',
        isAddressSelected: false
    });
    console.log(myOrders)

    const navigate = useNavigate();
    // const [count, setCount] = useState(0);

    const addToCart = async (product) => {

        {
            const encodedToken = localStorage.getItem("anixCartUserToken");
            try {
                const { data } = await axios.post(
                    `/api/user/cart`,
                    { product },
                    { headers: { authorization: encodedToken } }
                );

                setCartArray(data.cart);
                notifySuccess("Item added to cart");
            } catch (err) {
                navigate('/sign')
                notifyWarn('please login to add items')
            }
        }
    };

    const deleteFromCart = async (id) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");
        try {
            const { data } = await axios.delete(`/api/user/cart/${id}`, {
                headers: { authorization: encodedToken },
            });

            setCartArray(data.cart);
            notifySuccess(" Item deleted from cart");
        } catch (err) {
            console.log(err);
        }
    };

    const updateQuantity = async (actionType, id) => {
        const encodedToken = localStorage.getItem("anixCartUserToken");

        console.log(id);
        try {

            const { data } = await axios.post(
                `/api/user/cart/${id}`,
                {
                    action: {
                        type: actionType
                    }
                },
                { headers: { authorization: encodedToken } }
            );
            setCartArray(data.cart);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };



    const editAddress = (index) => {

        setEditIndex(index);
        const addressToEdit = addresses[index];
        setFormData({
            name: addressToEdit.name,
            mobile: addressToEdit.mobile,
            pinCode: addressToEdit.pinCode,
            city: addressToEdit.city,
            address: addressToEdit.address,
        });

    };
    const addAddress = (e) => {
        e.preventDefault();
        setAddresses([...addresses, formData]);
        setFormData({
            name: '',
            mobile: '',
            pinCode: '',
            city: '',
            address: '',
            isAddressSelected: false

        });
        { cartArray.length !== 0 && navigate('checkout') }

    };

    const deleteAddress = (index) => {
        const updatedAddresses = [...addresses];
        updatedAddresses.splice(index, 1);
        setAddresses(updatedAddresses);
    };

    const saveAddress = (e) => {
        e.preventDefault();
        const updatedAddresses = [...addresses];
        updatedAddresses[editIndex] = formData;
        setAddresses(updatedAddresses);
        setFormData({
            name: '',
            mobile: '',
            pinCode: '',
            city: '',
            address: '',
            isAddressSelected: false
        });
        setEditIndex(-1);
        { cartArray.length !== 0 && navigate('checkout') }

    };

    const selectAddress = (ind) => {
        setAddresses((Adresses) =>
            Adresses.map((address, index) =>
                index === ind
                    ? { ...address, isAddressSelected: true }
                    : { ...address, isAddressSelected: false }
            )
        );
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <cartContext.Provider
            value={{
                cartArray,
                addresses,
                formData,
                editIndex,
                add,
                setAdd,
                setAddresses,
                editAddress,
                deleteAddress,
                saveAddress,
                addAddress,
                setEditIndex,
                setFormData,
                selectAddress,
                handleInputChange,
                updateQuantity,
                setCartArray,
                addToCart,
                deleteFromCart,
                myOrders,
                setMyOrders
            }}
        >
            {children}
        </cartContext.Provider>
    );
};

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };
