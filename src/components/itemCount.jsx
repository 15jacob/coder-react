import React, { useEffect } from 'react';

function ItemCount({idProduct = null, stock = 0})
{
    useEffect(function()
    {
        //Asignamos el evento para actualizar las unidades seleccionadas
        document.querySelectorAll('.btn-update-stock').forEach(input => input.addEventListener('click', Update_Stock));
        document.querySelectorAll('.btn-add-cart').forEach(input => input.addEventListener('click', Add_Cart));
    });

    //Es necesario que haya un id de producto valido
    if(!idProduct || isNaN(idProduct)) return false;

    return (
        <>
            <div className="row item-count b-dashed">
                <div className="col-12">
                    <img src="https://es.web.img2.acsta.net/pictures/16/02/24/13/23/536269.jpg" alt="" />
                </div>

                <div className="col-12">
                    <span className='d-inline-block w-100 f-24'>La Zona Muerta</span>
                    <span className="d-inline-block w-100 fw-600i">Stephen King</span>
                </div>


                <div className="col-3">
                    <button className="btn btn-yellow btn-update-stock" data-id-counter={'#product-' + idProduct} data-action="substract">-</button>
                </div>

                <div className="col-6 d-flex align-items-center">
                    <span className="d-inline-block w-100 t-center f-22 fw-600" id={'product-' + idProduct} data-stock={stock} data-value={stock > 0 ? '1' : '0'}>{stock > 0 ? '1x' : 'Sin Stock'}</span>
                </div>

                <div className="col-3">
                    <button className="btn btn-yellow btn-update-stock" data-id-counter={'#product-' + idProduct} data-action="add">+</button>
                </div>

                <div className="col-12">
                    <button className="btn btn-red btn-add-cart" data-id-counter={'#product-' + idProduct}>Agregar al Carrito</button>
                </div>
            </div>
        </>
    );

    function Update_Stock()
    {
        let counter = document.querySelector(this.dataset.idCounter);
        let value = parseInt(counter.dataset.value);

        if(this.dataset.action === 'add' && parseInt(counter.dataset.stock) > parseInt(counter.dataset.value))
            value++;
        else if(this.dataset.action === 'substract' && 0 < parseInt(counter.dataset.value))
            value--;

        counter.dataset.value = value;
        counter.innerText = value + 'x';
    }

    function Add_Cart()
    {
        alert(`Agregaste ${document.querySelector(this.dataset.idCounter).dataset.value} unidades al carrito`);
    }
}

export default ItemCount;