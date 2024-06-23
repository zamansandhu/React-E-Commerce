import React, { useState } from "react";

const ProductFilter = () => {
    const [categoryFilters, setCategoryFilters] = useState({
        mens: false,
        womens: false,
        electronics: false,
    });
    const [priceRange, setPriceRange] = useState({ min: "", max: "" });
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
        const { name, value } = event.target;
        setPriceRange((prevRange) => ({
            ...prevRange,
            [name]: value,
        }));
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
        setPriceRange({ min: "", max: "" });
        setSelectedRating("");
        setSortBy("");
    };

    const filterProducts = () => {
        let filteredProducts = products;

        if (categoryFilters.mens || categoryFilters.womens || categoryFilters.electronics) {
            filteredProducts = filteredProducts.filter((product) =>
                (categoryFilters.mens && product.category === "mens") ||
                (categoryFilters.womens && product.category === "womens") ||
                (categoryFilters.electronics && product.category === "electronics")
            );
        }

        if (priceRange.min !== "" && priceRange.max !== "") {
            filteredProducts = filteredProducts.filter(
                (product) =>
                    product.price >= parseInt(priceRange.min) &&
                    product.price <= parseInt(priceRange.max)
            );
        }

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
        <div>
            <div>
                <label>Category:</label>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="mens"
                            checked={categoryFilters.mens}
                            onChange={handleCategoryChange}
                        />
                        Mens
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="womens"
                            checked={categoryFilters.womens}
                            onChange={handleCategoryChange}
                        />
                        Womens
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="electronics"
                            checked={categoryFilters.electronics}
                            onChange={handleCategoryChange}
                        />
                        Electronics
                    </label>
                </div>
            </div>

            <div>
                <label>Price Range:</label>
                <div>
                    <label>
                        Min:
                        <input
                            type="number"
                            name="min"
                            value={priceRange.min}
                            onChange={handlePriceRangeChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Max:
                        <input
                            type="number"
                            name="max"
                            value={priceRange.max}
                            onChange={handlePriceRangeChange}
                        />
                    </label>
                </div>
            </div>

            <div>
                <label>Ratings:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            value=""
                            checked={selectedRating === ""}
                            onChange={handleRatingChange}
                        />
                        All
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="4"
                            checked={selectedRating === "4"}
                            onChange={handleRatingChange}
                        />
                        4+
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="3"
                            checked={selectedRating === "3"}
                            onChange={handleRatingChange}
                        />
                        3+
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="2"
                            checked={selectedRating === "2"}
                            onChange={handleRatingChange}
                        />
                        2+
                    </label>
                </div>
            </div>

            <div>
                <label>Sort By:</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            value=""
                            checked={sortBy === ""}
                            onChange={handleSortByChange}
                        />
                        None
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="lowToHigh"
                            checked={sortBy === "lowToHigh"}
                            onChange={handleSortByChange}
                        />
                        Price: Low to High
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="highToLow"
                            checked={sortBy === "highToLow"}
                            onChange={handleSortByChange}
                        />
                        Price: High to Low
                    </label>
                </div>
            </div>

            <button onClick={handleClearFilters}>Clear Filters</button>

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductFilter;
