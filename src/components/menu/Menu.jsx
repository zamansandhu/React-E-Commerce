import React from "react";
import './menu.css';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import BusinessIcon from '@mui/icons-material/Business';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ViewListIcon from '@mui/icons-material/ViewList';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from "@mui/material/Badge";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useGlobalLogin } from "../../contexts/login-context";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useGlobalCart } from "../../contexts/cart-context";


export default function Menu({ menuFunction }) {

    const { userToken, logoutUser, userDetail } = useGlobalLogin()
    const { cartArray } = useGlobalCart()

    const navigate = useNavigate();

    const logoutAction = () => {
        logoutUser()
        menuFunction()
    }

    return (
        <>
            <div className="main-menu">
                <div className="menu-left">
                    <div className="close-menu" onClick={menuFunction}>
                        <HighlightOffIcon />
                    </div>
                    <div className="welcome">
                        <h1><AccountCircleIcon className="user" />👋{userDetail ? userDetail.name : "user"}</h1>
                    </div>
                    <div className="order">
                        <ul>
                            <h2>Order</h2><br /><br />
                            <Link to={'/orders'} >
                                <li onClick={menuFunction}><ViewListIcon />My orders</li>
                            </Link>
                            <Link to={'/wishlist'}>
                                <li onClick={menuFunction}><FavoriteBorderIcon />My Wishlist</li>
                            </Link>
                            <Link to={'/cart'}>

                                <li onClick={menuFunction}><ShoppingCartIcon />My Cart {cartArray.length}</li>
                            </Link>

                        </ul>
                    </div><hr />

                    <div className="payment">
                        <ul>
                            <h2>Payments</h2><br /><br />
                            <li onClick={menuFunction}><PaymentIcon />Payment History</li>
                            <li onClick={menuFunction}><AccountBalanceWalletIcon />Payment Refund</li>
                        </ul>
                    </div><hr />

                    <div className="hellp">
                        <ul>
                            <h2>Help & Setting</h2><br /><br />
                            <Link to={'/profile'}>
                                <li onClick={menuFunction}><ManageAccountsIcon />My Account</li>
                            </Link>
                            <li onClick={menuFunction}><SupportAgentIcon />Costumer Support</li>
                            <Link to={'/addresses'}>
                                <li onClick={menuFunction}><BusinessIcon />My Address</li>
                            </Link>
                            {
                                userToken ?
                                    <li onClick={logoutAction}><LogoutIcon /> Log Out</li> :
                                    <NavLink to='/sign'>
                                        <li onClick={menuFunction}><LoginIcon />Log In</li>
                                    </NavLink>
                            }
                        </ul>
                    </div>
                </div>
                <div className="menu-right" onClick={menuFunction}>

                </div>
            </div>
        </>
    )
}