import React from "react";
import './Footer.css'
import logo from '../../Images/anix4.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CancelScheduleSendOutlinedIcon from '@mui/icons-material/CancelScheduleSendOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
export default function Footer() {

    let date = new Date().getFullYear()

    return (
        <>
            <div className="footer">
                <div className="about">

                    <ul>
                        <li><h2>About</h2></li>
                        <li> <AddIcCallOutlinedIcon /> Contact Us</li>
                        <li> <InfoOutlinedIcon /> About Us</li>
                        <li> <MenuBookOutlinedIcon /> Anix Stories</li>



                    </ul>
                </div>
                <div className="help">
                    <ul>
                        <li><h2>Help</h2></li>
                        <li> <AccountBalanceWalletOutlinedIcon /> Payment</li>
                        <li> <LocalShippingOutlinedIcon /> Shipping</li>
                        <li> <CancelScheduleSendOutlinedIcon /> Cancellation & Return</li>
                        <li> <KeyboardReturnOutlinedIcon /> Return</li>
                    </ul>
                </div>
                <div className="policy">
                    <ul>
                        <li><h2>Policy</h2></li>
                        <li> <KeyboardReturnOutlinedIcon />  Return Policy</li>
                        <li> <GavelOutlinedIcon /> Terms & Use</li>
                        <li> <SecurityOutlinedIcon />  Privecy</li>
                        <li> <VpnKeyOutlinedIcon /> Security</li>
                    </ul>
                </div>
                <div className="social">
                    <ul>
                        <li><h2>Social</h2></li>
                        <li> <FacebookIcon /> Facebook</li>
                        <li> <TwitterIcon /> Twitter</li>
                        <li> <InstagramIcon /> Instagram</li>
                        <li> <GitHubIcon /> Github</li>
                    </ul>
                </div>


            </div>
            <div className="copy">
                <h4> &#169;Copyright {date}</h4>   <img src={logo} alt="" />
            </div>

        </>
    )
}