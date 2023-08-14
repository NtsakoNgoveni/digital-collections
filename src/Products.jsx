
import { ShopContext } from './Context';
import { useContext, useEffect, useState } from 'react';
import Items from "./Items";

export default function Products() {

    const {addToCart, cartItem} = useContext(ShopContext);
    return(
        <div className='shop'>
        {Items.map(item => (
        <div className="productContainer" key={item.id}>
            <img src={item.path} alt="No found" />
            <h3>{item.ProductName}</h3>
            <p className="price">${item.Price}</p>
            <button className="addToCart-btn" onClick={() => addToCart(item.id)}>Add to cart ({cartItem[item.id]})</button>
        </div>
        ))}
        </div>
    );
}

