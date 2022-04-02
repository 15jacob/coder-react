import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {useCartContext} from './CartContextProvider.jsx';

function ItemCount({idProduct = null, stock = 0, price = 0,})
{
    const [selected, setSelected] = useState(1);
    const {addItem, removeItem, isInCart} = useCartContext();

    const addToCartHandler = function(add)
    {
        if(isInCart(idProduct) === false)
            addItem({id: idProduct, selected});
        else
            removeItem(idProduct);
    }

    return (
        <div className="row">
            {
                isInCart(idProduct) === false ?
                    <>
                        <div className="col-auto p-0">
                            <button className={`${stock > 0 ? 'btn-red' : 'btn-dark disabled'} btn-update-stock`} data-id-counter={'#counter-' + idProduct} onClick={() => {if(selected > 1) setSelected(selected - 1)}}>-</button>
                        </div>

                        <div className="col p-0 d-flex align-items-center">
                            <span className="d-inline-block w-100 t-center f-16 fw-600" id={'counter-' + idProduct} data-stock={stock}>{stock > 0 ? `${selected}x $${price * selected}.-` : 'Sin Stock'}</span>
                            <input id={'selected-' + idProduct} type="hidden" value={selected} />
                        </div>

                        <div className="col-auto p-0">
                            <button className={`${stock > 0 ? 'btn-red' : 'btn-dark disabled'} btn-update-stock`} data-id-counter={'#counter-' + idProduct} onClick={() => {if(selected < stock) setSelected(selected + 1)}}>+</button>
                        </div>
                    </>
                :
                    <div className="col-12 p-0">
                        <Link to="/cart">
                            <button className="btn-grey">Ir al Carrito</button>
                        </Link>
                    </div>
            }

            <hr className="my-10"/>

            <div className="col-12 p-0">
                {
                    isInCart(idProduct) === false ?
                        <button className={`${stock > 0 ? 'btn-dark btn-add-cart' : 'btn-grey disabled'}`} data-id-counter={'#counter-' + idProduct} onClick={() => addToCartHandler(true)}>{stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}</button>
                    :
                        <button className="btn-red" onClick={() => addToCartHandler(false)}>Quitar</button>
                }
            </div>
        </div>
    );
}

export default ItemCount;