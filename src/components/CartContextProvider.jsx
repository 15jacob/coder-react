import { createContext, useContext, useState } from 'react';
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children})
{
    const [cartList, setCartList] = useState([]);

    const addItem = function(item)
    {
        if(isInCart(item.id) === false)
            setCartList([...cartList, item]);
    }

    const removeItem = function(id)
    {
        setCartList(cartList.filter(item => item.id !== id));
    }

    const isInCart = function(id)
    {
        for(let i = 0; i < cartList.length; i++)
            if(cartList[i].id === id) return true;

        return false;
    }

    const clear = function()
    {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, isInCart, clear}}>
            {children}
        </CartContext.Provider >
    );
}

export default CartContextProvider;