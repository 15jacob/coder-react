import React, { useState } from 'react';

function ItemCount({idProduct = null, stock = 0})
{
    const [selected, setStock] = useState(1);

    //Es necesario que haya un id de producto valido
    if(!idProduct || isNaN(idProduct)) return false;

    return (
        <div className="col-12">
            <div className="row">
                <div className="col-auto p-0">
                    <button className="btn btn-red btn-update-stock" data-id-counter={'#counter-' + idProduct} onClick={() => { if(selected > 1) setStock(selected - 1) }}>-</button>
                </div>

                <div className="col p-0 d-flex align-items-center">
                    <span className="d-inline-block w-100 t-center f-22 fw-600" id={'counter-' + idProduct} data-stock={stock}>{stock > 0 ? selected + 'x' : 'Sin Stock'}</span>
                    <input id={'selected-' + idProduct} type="hidden" value={selected} />
                </div>

                <div className="col-auto p-0">
                    <button className="btn btn-red btn-update-stock" data-id-counter={'#counter-' + idProduct} onClick={() => { if(selected < stock) setStock(selected + 1) }}>+</button>
                </div>

                <hr className="my-10" />

                <div className="col-12 p-0">
                    <button className="btn btn-dark btn-add-cart" data-id-counter={'#counter-' + idProduct} onClick={() => Add_Cart(idProduct)}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );

    function Add_Cart(idProduct)
    {
        let selected = document.querySelector('#selected-' + idProduct).value;

        alert(`Agregaste ${selected} ${selected > 1 ? 'unidades' : 'unidad'} al carrito`);
    }
}

export default ItemCount;