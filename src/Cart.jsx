import { useContext } from 'react';
import { ShopContext } from './Context';
import Items from "./Items";
import './cart.css'
export default function Cart()
{
    const {addToCart, cartItem, removeCart, handleChange, empty} = useContext(ShopContext);
   const itemsDisplay =  Items.filter(product => cartItem[product.id] > 0)
    return(
        <div className="cart-main">
            {itemsDisplay.map(item => (
                <div className="cart-container" key={item.id}>
                  <img src={item.path} alt="no found" />
                  <div className='details'>
                    <strong><p className="name">{item.ProductName}</p></strong>
                    <p className="cart-price">${item.Price * cartItem[item.id]}</p>
                    <button className='decrease-btn' onClick={() => removeCart(item.id)}>-</button>
                    <input type="number" name="" id="" value={empty ? '': cartItem[item.id]} onChange={(event)=> handleChange(event, item.id)}/>
                    <button className='increase-btn' onClick={()=> addToCart(item.id)}>+</button>
                  </div>
                </div>
            ))}
        </div>
    )
}