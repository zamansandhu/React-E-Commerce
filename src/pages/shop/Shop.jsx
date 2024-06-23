import React, { useState } from "react";
import Product from "../../components/product/Product";
import "../home/main.css";
import "./Shop.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import { useEffect } from "react";
import { useGlobalProducts } from "../../contexts/productContext";

const Shop = () => {
    const { productLoading, products } = useGlobalProducts();
    const [open, setOpen] = useState(false)
    const [categoryFilters, setCategoryFilters] = useState({
        mens: false,
        womens: false,
        electronics: false,
        fragrances: false,
    });

    const [priceRange, setPriceRange] = useState([2000, 2000]);
    const [selectedRating, setSelectedRating] = useState("");
    const [sortBy, setSortBy] = useState("");

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        const isChecked = event.target.checked;
        setCategoryFilters((prevFilters) => ({
            ...prevFilters,
            [category]: isChecked,
        }));
    };

    const handlePriceRangeChange = (event) => {
        setPriceRange([parseInt(event.target.value), priceRange[1]]);
    };

    const handleRatingChange = (event) => {
        setSelectedRating(event.target.value);
    };

    const handleSortByChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleClearFilters = () => {
        setCategoryFilters({
            mens: false,
            womens: false,
            electronics: false,
        });
        setPriceRange([0, 100]);
        setSelectedRating("");
        setSortBy("");
    };
    const filterProducts = () => {
        let filteredProducts = products;

        if (categoryFilters.mens || categoryFilters.womens || categoryFilters.electronics || categoryFilters.fragrances) {
            filteredProducts = filteredProducts.filter((product) =>
                (categoryFilters.mens && product.categ === "mens") ||
                (categoryFilters.womens && product.categ === "womens") ||
                (categoryFilters.electronics && product.categ === "electronics") ||
                (categoryFilters.fragrances && product.categ === "fragrances")
            );
        }


        filteredProducts = filteredProducts.filter(
            (product) =>
                product.price <= priceRange[0] && product.price <= priceRange[1]
        );

        if (selectedRating !== "") {
            filteredProducts = filteredProducts.filter(
                (product) => product.rating >= parseFloat(selectedRating)
            );
        }

        if (sortBy === "lowToHigh") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === "highToLow") {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        return filteredProducts;
    };

    const filteredProducts = filterProducts();

    return (
        <>   <FilterListIcon className="ficon" onClick={() => setOpen((prev) => !prev)} fontSize="large"
            style={{ position: 'relative', top: '20px', left: '20px', cursor: 'pointer' }}
        />
            <div className="product">
                {open && (<div className="filter">
                    <div className="filter-header">
                        <button className="clear" onClick={handleClearFilters} >clear</button>
                        <h3>filter</h3>
                    </div>

                    <hr style={{ width: '100%' }} />

                    <div className="filter-by-price">
                        <h3>price</h3>
                        <br />
                        <div className="range" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', fontSize: '10px' }}>
                            <p>0</p>
                            <p>1000</p>
                            <p>2000</p>
                        </div>
                        <input

                            type="range"
                            name="min"
                            id=""
                            min='0'
                            max="2000"
                            value={priceRange[0]}
                            onChange={handlePriceRangeChange}
                            style={{ width: "100%", height: '1px', padding: '2px', cursor: 'pointer' }} />
                    </div>

                    <hr style={{ width: '100%' }} />

                    <div className="filter-by-category">
                        <h3>categories</h3>
                        <p><input
                            type="checkbox" name="" id="" value="mens"
                            checked={categoryFilters.mens}
                            onChange={handleCategoryChange}


                        /><h5>Men</h5></p>
                        <p><input

                            type="checkbox" name="" id="" value="womens"
                            checked={categoryFilters.womens}
                            onChange={handleCategoryChange}

                        /><h5>women</h5></p>
                        <p><input

                            type="checkbox" name="" id="" value="electronics"
                            checked={categoryFilters.electronics}
                            onChange={handleCategoryChange}

                        /><h5>electronics</h5></p>
                        <p><input type="checkbox" name="" id=""
                            value="fragrances"
                            checked={categoryFilters.fragrances}
                            onChange={handleCategoryChange}

                        /><h5>fragrances</h5></p>
                    </div>
                    <hr style={{ width: '100%' }} />

                    <div className="filter-by-rating">
                        <h3>Rating</h3>
                        <p><input
                            type="radio" name="rating" id="" value="4"

                            checked={selectedRating === "4"}
                            onChange={handleRatingChange}
                        /><h5>4⭐and_above</h5></p>
                        <p><input
                            type="radio" name="rating" id="" value="3"
                            checked={selectedRating === "3"}
                            onChange={handleRatingChange}

                        /><h5>3⭐and_above</h5></p>
                        <p><input
                            type="radio" name="rating" id="" value="2"
                            checked={selectedRating === "2"}
                            onChange={handleRatingChange}

                        /><h5>2⭐and_above</h5></p>
                        <p><input
                            type="radio" name="rating" id="" value="1"
                            checked={selectedRating === "1"}
                            onChange={handleRatingChange}

                        /><h5>1⭐and_above</h5></p>





                    </div>
                    <hr style={{ width: '100%' }} />

                    <div className="filter-by-price2">
                        <h3>price</h3>
                        <p><input
                            checked={sortBy === "lowToHigh"}
                            onChange={handleSortByChange}
                            type="radio" name="price2" id="" value="lowToHigh"

                        /><h5>⬇️low_To_High⬆️</h5></p>
                        <p><input

                            type="radio" name="price2" id="" value="highToLow"

                            checked={sortBy === "highToLow"}
                            onChange={handleSortByChange}
                        /><h5>⬆️high_To_Low⬇️</h5></p>


                    </div>
                </div>)}
                <div className="product-container">
                    <Product
                        category={""}
                        title={""}
                        products={filteredProducts}
                        productLoading={productLoading}
                    />
                </div>
            </div >
        </>
    );
};

export default Shop;
