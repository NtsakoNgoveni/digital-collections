import {useState, createContext, useEffect } from "react";
import axios from 'axios';

export const ShopContext = createContext();

export default function StateProvider(props)
{

    const [empty, setEmpty] = useState(false)

    function addToCart(ItemId)
{
    setcartItem(prev => 
        {
            if (prev[ItemId] !== undefined){
                return ({...prev, [ItemId]: Number(prev[ItemId]) + 1})
            }
            else{
                return ({...prev, [ItemId]: 1 })
            }
        })
        setEmpty(false);
}
    function removeCart(ItemId)
    {
        setcartItem(prev =>({...prev, [ItemId]: (prev[ItemId]) !==1 ? prev[ItemId] - 1: 1}))
    }
 
    function handleChange(event, ItemId)
    {
        if ((event.target.value))
        {
            setcartItem(prev => ({...prev, [ItemId]: event.target.value}))
            console.log(event.target.value)
            setEmpty(false);
        }
        else if(event.target.value == 0 && cartItem[ItemId] === 1)
        {
            setEmpty(true);
            console.log('I work')
        }
        else
        {
            setcartItem(prev => ({...prev, [ItemId]: 1}))
            event.target.value = 0;
            setEmpty(false);
            console.log(event.target.value)
        }
    }
    const [cartItem, setcartItem] = useState({});
    const contextValues = {cartItem, addToCart, removeCart, handleChange, empty};

    return <ShopContext.Provider value={contextValues}>{props.children}</ShopContext.Provider>;
}