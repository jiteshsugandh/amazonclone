import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id,image,title,price,rating, hideButton}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='CheckoutProduct'>
            <img className='CheckoutProduct_image' src= {image } />

            <div className='CheckoutProduct_info'>
                <p className='CheckoutProduct_title'> {title} </p>

                <p className='CheckoutProduct_price'> 
                <small> ₹ </small> 
                <strong>{price}</strong>
                </p>
                <div className='CheckoutProduct_rating'>
                    {Array(rating).fill().map((_,i) => (
                        <p>⭐</p>
                     ))}
                </div>
                {!hideButton && (
                <button className="remove" onClick={removeFromBasket}>Remove From Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct;
