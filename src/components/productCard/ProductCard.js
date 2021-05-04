import React from 'react'
import "./productCard.css"

const ProductCard = ({ image, title, price, rating, review, isPrime }) => {

    const prime = <h4 className="prime"><span style={{ color: 'orange' }}>&#10003;</span>
                    <span style={{ color: 'skyblue' }}>prime</span></h4>
    
    const generateStars = (rating) => {
        const star = '\u2605'
        const emptyStar = '\u2606'
        let result = ''
        for(let i=0; i<Math.round(rating); i++){
            result += star
        }
        for(let j=0; j< (5 - Math.round(rating)); j++){
            result += emptyStar
        }
        return result
    }

    const finalRating = <p className="rating"> 
                        <span style={{ color: '#e6ac00', fontSize:'25px' }}>
                        {generateStars(rating)} </span>
                        ({review})
                        </p>

    const formatPrice = (rate) => {
        let price = rate.toString()
        if(price.length <= 3){
            return price
        }
        else{
            let result = ""
            let count = 0
            for(let i=price.length-4; i >= 0; i--){
                if(count === 2){
                    result = "," + result
                    count = 0
                }
                else{
                    result = price[i] + result
                    count += 1
                }
            }
            result = result + "," + price.slice(-3)
            return result
        }
    }

    const addToCart = () => {
        alert("Product Added to Cart")
    }

    return (
        <div className="product-card">
            <img className="product-image" src={image} alt={title.substring(0,15)}/>
            <p>{title}</p>
            <h3>₹ {formatPrice(price)}</h3>
            {finalRating}
            {isPrime && prime}
            <div className="add-to-cart">
                <button className="cart-button" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard
