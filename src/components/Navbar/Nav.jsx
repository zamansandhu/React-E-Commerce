// import { NavLink } from "react-router-dom";
import "./Nav.css";
import Menu from "../../components/menu/Menu";
import Sign from "../../pages/signin/Sign";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import Avatar from "@mui/material/Avatar";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ChairIcon from "@mui/icons-material/Chair";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import Man2Icon from "@mui/icons-material/Man2";
import Woman2Icon from "@mui/icons-material/Woman2";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Badge from "@mui/material/Badge";
import logo from "../../Images/anix4.png";
import { NavLink } from "react-router-dom";
import { useGlobalCart } from "../../contexts/cart-context";
import { useState } from "react";
import AccountMenu from "../acountMenu/AccountMenu";
import { useGlobalLogin } from "../../contexts/login-context";
import { useGlobalWishlist } from "../../contexts/wishlist-context";
import SearchBox from "../searchBox/SearchBox";
function Navbar() {
    const { cartArray } = useGlobalCart();
    const { wishlistArray } = useGlobalWishlist();
    const { userToken } = useGlobalLogin();
    const [showMenu, setShowMenu] = useState(false);
    const [showLog, setLog] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const active = ({ isActive }) => ({
        fontWeight: isActive ? "800" : "200",
        color: isActive ? "gold" : "",
    });

    const menuFunction = () => {
        setShowMenu(!showMenu);
    };

    const logFunction = () => {
        setLog(!showLog);
    };
    return (
        <>
            {showMenu && <Menu menuFunction={menuFunction} />}

            {showLog && (
                <div onClick={logFunction}>
                    <Sign />
                </div>
            )}

            <nav>
                <div className="nav-mid">
                    <ShoppingCartOutlinedIcon fontSize="large" />{" "}
                    <img src={logo} alt="img" />
                </div>

                <div className="search">
                    <input
                        type="search"
                        name=""
                        className="search"
                        placeholder="Search Anixcart.in..."
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput}
                    />
                    <SearchBox
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                    />
                </div>

                <div className="nav-right">
                    <div className="icons">
                        <div className="img4">
                            {userToken ? (
                                <AccountMenu />
                            ) : (
                                <NavLink to="/sign" style={active}>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        style={{
                                            backgroundColor: "white",
                                            color: "black",
                                            padding: "2px",
                                        }}
                                    >
                                        <b>login</b>
                                    </Button>
                                </NavLink>
                            )}
                        </div>

                        <div className="img4">
                            <NavLink to="/wishlist" style={active}>
                                <Tooltip title="Wishlist">
                                    <Badge badgeContent={wishlistArray.length} color="success">
                                        <FavoriteSharpIcon className="cart-icon" />
                                    </Badge>
                                </Tooltip>
                            </NavLink>
                        </div>

                        <div className="img3">
                            <NavLink to="/Cart" style={active}>
                                <Tooltip title="Cart">
                                    <Badge badgeContent={cartArray.length} color="success">
                                        <ShoppingCartIcon className="cart-icon" />
                                    </Badge>
                                </Tooltip>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="navigation">
                <ul>
                    <div className="img-name" onClick={menuFunction}>
                        <MenuIcon />
                    </div>
                    <div className="home">
                        <li>
                            <NavLink to="/" style={active}>
                                <HomeIcon />
                            </NavLink>
                        </li>
                    </div>
                    <div className="Shop">
                        <li>
                            <NavLink to="/shop" style={active}>
                                Shop
                            </NavLink>
                        </li>
                    </div>
                    <div className="ments-wear">
                        <li>
                            <NavLink to="/Mens" style={active}>
                                Mens
                            </NavLink>
                        </li>
                    </div>

                    <div className="womens-saare">
                        <li>
                            <NavLink to="/Womens " style={active}>
                                Womens
                            </NavLink>
                        </li>
                    </div>
                    <div className="home-appliance">
                        {" "}
                        <li>
                            <NavLink to="/electronics" style={active}>
                                Electronics
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>
        </>
    );
}
export default Navbar;
