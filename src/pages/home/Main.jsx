import React, { useEffect } from "react";
import "./main.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import Sign from './Sign'
import { useState } from "react";
import Product from "../../components/product/Product";
import Topdeals from "../../components/topdeals/Topdeals";
import ManIcon from '@mui/icons-material/Man';
import { Navigate, useNavigate, useParams } from "react-router-dom";
import WomanIcon from '@mui/icons-material/Woman';
import DevicesIcon from '@mui/icons-material/Devices';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import { useGlobalWishlist } from "../../contexts/wishlist-context";
// import Mens from "./Mens";

export default function Main() {
    const navigate = useNavigate()
    return (
        <>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval="3000"
                emulateTouch={true}
            >
                <div>
                    <img src="https://www.liamjmoore.com/images/liam-moore-portfolio-john-lewis-9.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://1.bp.blogspot.com/-CccUX_R7xpk/YPF2An129PI/AAAAAAAABPM/l_yswgsw34Ua88ZCv8NCh-qGGBNQ-BIvwCNcBGAsYHQ/s1920/Small-appliances-banner-1920x500.jpg" />
                    <p className="legend">Legend 3</p>
                </div>

                <div>
                    <img src="https://trisvaraa.files.wordpress.com/2019/05/exclusive-features-that-makes-banarasi-sarees-special.jpg?w=656&h=290&crop=1" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://www.ilovecarousel.com/blog/wp-content/uploads/2020/10/MG_4201-820x312.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://uk.yamaha.com/en/files/tw-e3b-purple-slider_5292a53b94567c3c40d65d5595c4c3ae.jpg?impolicy=resize&imwid=1200&imhei=480" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <br />
            <br /><br />

            <div className="collection">
                <div className="Mens-jacket col" onClick={() => navigate('/mens')} >

                    <p>Mens</p>
                </div>
                <div className="Womens-saree col" onClick={() => navigate('/womens')} >
                    <p>Womens</p>
                </div>
                <div className="Mens-shoes col" onClick={() => navigate('/electronics')} >
                    <p>Electronics</p>
                </div>

            </div>

            <Topdeals category="womens-saaree" title="womens-saaree" />
            <Topdeals category="tops" title="Tops" />
            <Topdeals category="smart-tv" title="smart-tv" />
            <Topdeals category="laptops" title="laptops" />
            <Topdeals category="smartphones" title="smartphones" />
            <Topdeals category="mens-watches" title="Mens Watches" />

            <div className="cole">
                {" "}

            </div>


        </>
    );
}
