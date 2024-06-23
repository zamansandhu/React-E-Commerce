import React from 'react'
import Product from './Product'
import './CSS/main.css';


const Decoration = () => {
    return (
        <>
            <Product
                category='home-decoration'
                title='home decoration'
            />
            <Product
                category='furniture'
                title='furniture'
            />
            <Product
                category='lighting'
                title='lighting'
            />

        </>
    )
}

export default Decoration
