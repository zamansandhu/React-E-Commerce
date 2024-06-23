import React from 'react'
import '../home/main.css';
import CategoryProducts from '../../components/categoryProducts/CategoryProducts';


const Womens = () => {
    return (
        <>
            <CategoryProducts
                category='womens-saaree'
                title='womens-saaree'
            />
            <CategoryProducts
                category='tops'
                title='girls tops'
            />
            <CategoryProducts
                category='frock'
                title='girls-frock'
            />
            <CategoryProducts
                category='womens-shoes'
                title='womens-watches'
            />

        </>
    )
}

export default Womens
