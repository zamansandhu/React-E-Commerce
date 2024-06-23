import React from 'react'
import './searchBox.css'
import { useGlobalProducts } from '../../contexts/productContext'
import { Link } from 'react-router-dom';

const SearchBox = ({ searchInput, setSearchInput }) => {
    const { products } = useGlobalProducts();

    let searchData = products.filter(({ title, category }) => category.includes(searchInput) || title.includes(searchInput))

    if (searchData.length === 0) {
        searchData = []
    }

    return (
        <div className='search-model'>
            {
                searchInput ?
                    searchData.length !== 0 ?
                        <div className="search-data">
                            {
                                searchData.map(({ _id, title, thumbnail, price }) => (
                                    <Link to={`/single-product/${_id}`} className='ind-search-product' onClick={() => setSearchInput('')}>
                                        <div className="seacrh-item">
                                            <img src={thumbnail} alt="" style={{ height: '100px', width: '80px' }} />
                                            <p>{title.slice(0, 25)}</p>
                                            <p>Rs/- {price}</p>

                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        :
                        <p className='no-data-found'>No data found</p> : null
            }
        </div>
    )
}

export default SearchBox
