import React from 'react'
import '../home/main.css';
import CategoryProducts from '../../components/categoryProducts/CategoryProducts';


const Mens = () => {
    return (
        <>
            <CategoryProducts
                category='mens-watches'
                title='Mens Watches'
            />
            <CategoryProducts
                category='mens-shoes'
                title='Mens Shoes'
            />
            <CategoryProducts
                category='mens-shirts'
                title='Mens shirt'
            />

        </>
    )
}

export default Mens
