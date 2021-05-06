import React from 'react'
import "./productCard.css"
import {generateStars, formatPrice} from "../../utils/Utils"

const ProductCard = ({ image, title, price, rating, review, isPrime }) => {

    const prime = <h4 className="prime"><span style={{ color: 'orange' }}>&#10003;</span>
                    <span style={{ color: 'skyblue' }}>prime</span></h4>
    

    const finalRating = <p className="rating"> 
                        <span style={{ color: '#e6ac00', fontSize:'25px' }}>
                        {generateStars(rating)} </span>
                        ({review})
                        </p>

    const addToCart = (item) => {
        alert(`${item}...  added to Cart`)
    }

    return (
        <div className="product-card">
            <img className="product-image" src={image} alt={title.substring(0,15)}/>
            <p>{title}</p>
            <h3>₹ {formatPrice(price)}</h3>
            {finalRating}
            {isPrime && prime}
            <div className="add-to-cart">
                <button className="cart-button" onClick={() => (addToCart(title.substring(0,15)))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard
