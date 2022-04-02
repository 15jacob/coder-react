//import notificador_noresults from './../assets/img/u63/u63_noresults.svg';
import { useEffect, useState } from 'react';
import {useCartContext} from './CartContextProvider.jsx';

import ItemCount from './ItemCount.jsx';
import {Get_Products_By_Id} from '../assets/js/ultra-fake-api.js';

function Cart()
{
    const {cartList} = useCartContext();
    const [total, setTotal] = useState(0);

    useEffect(function()
    {
        let totalPrice = 0;

        for(let i = 0; i < cartList.length; i++)
        {
            let product = Get_Products_By_Id(cartList[i].id);
            totalPrice = total + (product.price * cartList[i].selected);
        }

        setTotal(totalPrice);
    }, [])

    return (
        <div className="container m-auto mt-50 px-50">
            <div className="row justify-center px-50">
                <div className="col-8">
                {
                    cartList.map(function(cartItem)
                    {
                        //Por cada producto iterado, conseguimos sus datos con su ID
                        let product = Get_Products_By_Id(cartItem.id);
                        
                        if(product)
                        {
                            return (
                                <div key={product.idProduct} className="row mb-10 bg-grey-14 box-shadow-1 b-dashed">
                                    <div className="col-4">
                                        <img src={product.img} alt={product.title} />
                                    </div>

                                    <div className="col-8">
                                        <h2 className="f-24">{product.title}</h2>
                                        <h3 className="f-20 fw-600i mb-20">{product.author}</h3>
                                        <hr className="my-10" />
                                        <ItemCount idProduct={product.idProduct} stock={product.stock} price={product.price}/>
                                    </div>
                                </div>
                            );
                        }

                        return null;
                    })
                }
                    <hr className="my-20" />
                    <h2 className="t-right">Total: ${total.toFixed(2)}.-</h2>
                    <span className="d-inline-block w-100 f-20 t-right">No incluye tarifa de envio</span>
                </div>
            </div>
        </div>
    );
}

export default Cart;