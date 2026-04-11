"use client"
import { CartContext } from '@/context/CartProvider';
import React, { use, useState } from 'react';

const CardButton = ({food}) => {
    const [inCart, setInCart] = useState(false)
    const {addToCart} = use(CartContext);
    const handleAddToCart =()=>{
addToCart(food);
        setInCart(true);
    }

    return (
       <button disabled={inCart} onClick={handleAddToCart} className="flex-1 disabled:bg-amber-100 bg-yellow-400  text-black py-2 rounded-lg hover:bg-yellow-600">
          {inCart ? "Added" : "Add to Cart"}
          
          </button>
    );
};

export default CardButton;