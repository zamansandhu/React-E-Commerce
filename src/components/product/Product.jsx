import React, { useEffect, useState } from "react";
import "../../pages/home/main.css";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Loading from "../skelton/Loading";
import ProductCard from "../productCard/ProductCard";

const Product = ({ products, productLoading }) => {

    return (
        <>
            {productLoading ? (
                <Loading />
            ) : (
                <div className="items">
                    {products?.map((product) => {
                        return (
                            <ProductCard product={product} />
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Product;
