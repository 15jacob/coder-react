import { createContext, useContext, useState, useEffect } from 'react';
const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({children})
{
    //Si existe un carrito en storage, lo tomamos y parseamos, sino, inicializamos en un array vacio
    const [cartList, setCartList] = useState(localStorage.cart ? JSON.parse(localStorage.cart) : []);
    const [totalItems, setTotalItems] = useState(cartList.length);

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

    //Actualizamos el storage con el carrito
    useEffect(function()
    {
        localStorage.setItem('cart', JSON.stringify(cartList));
        setTotalItems(cartList.length);
    }, [cartList]);

    return (
        <CartContext.Provider value={{cartList, addItem, removeItem, isInCart, clear, totalItems}}>
            {children}
        </CartContext.Provider >
    );
}

export default CartContextProvider;