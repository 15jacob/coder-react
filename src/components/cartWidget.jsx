import { useState, useEffect } from 'react';
import icon_cart from './../assets/img/u63/misc_cart.svg';
import {useCartContext} from './CartContextProvider.jsx';

function CartWidget()
{
    const [quantityBubble, setQuantityBubble] = useState('d-none');
    const {totalItems} = useCartContext();
    

    useEffect(function()
    {
        setQuantityBubble(totalItems > 0 ? 'd-flex' : 'd-none');
    }, [totalItems])

    return (
        <li className="d-inline-flex flex-wrap align-content-center btn-red c-pointer">
            <div className="row p-20">
                <img className="width-100" src={icon_cart} alt="Carrito"/>
                <div className={quantityBubble} id="quantity-bubble">
                    <span>{totalItems}</span>
                </div>
            </div>
        </li>
    );
}

export default CartWidget;