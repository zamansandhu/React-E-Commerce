import React from 'react'
import CategoryProducts from '../../components/categoryProducts/CategoryProducts';
import '../home/main.css';


const Electronics = () => {
    return (
        <>
            <CategoryProducts
                category='smartphones'
                title='smartphones'
            />
            <CategoryProducts
                category="smart-tv"
                title="smart-tv"
            />
            <CategoryProducts
                category='laptops'
                title='laptops'
            />

        </>
    )
}

export default Electronics
