import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';

import {CONTEXT_CART} from '../App.js';

function ItemCount({idProduct = null, stock = 0, price = 0,})
{
    const [selected, setSelected] = useState(1);
    const [inCart, setInCart] = useState(false);

    const {cart} = useContext(CONTEXT_CART);

    //ALELUYAAA
    console.log(cart);

    return (
        <div className="row">
            <div className="col-auto p-0">
                <button className={`btn ${stock > 0 ? 'btn-red' : 'btn-dark disabled'} btn-update-stock`} data-id-counter={'#counter-' + idProduct} onClick={() => {if(selected > 1) setSelected(selected - 1)}}>-</button>
            </div>

            <div className="col p-0 d-flex align-items-center">
                <span className="d-inline-block w-100 t-center f-16 fw-600" id={'counter-' + idProduct} data-stock={stock}>{stock > 0 ? `${selected}x $${price * selected}.-` : 'Sin Stock'}</span>
                <input id={'selected-' + idProduct} type="hidden" value={selected} />
            </div>

            <div className="col-auto p-0">
                <button className={`btn ${stock > 0 ? 'btn-red' : 'btn-dark disabled'} btn-update-stock`} data-id-counter={'#counter-' + idProduct} onClick={() => {if(selected < stock) setSelected(selected + 1)}}>+</button>
            </div>

            <hr className="my-10"/>

            <div className="col-12 p-0">
            {
                inCart === false ?
                    <button className={`btn ${stock > 0 ? 'btn-dark btn-add-cart' : 'btn-grey disabled'}`} data-id-counter={'#counter-' + idProduct} onClick={() => setInCart(true)}>{stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}</button>
                :
                    <Link to="/cart">
                        <button className="btn btn-yellow">Finalizar Compra</button>
                    </Link>
            }
            </div>
        </div>
    );
}

export default ItemCount;