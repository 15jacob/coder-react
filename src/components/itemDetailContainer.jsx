import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail.jsx';

function ItemDetailContainer()
{
    const [productDetails, setproductDetails] = useState([]);
    const { productId } = useParams();

    //Pendiente de pasar a un JSON que haga mock de una API para no repetirlo en dos componentes separados
    const PRODUCTOS =
    [
        {
            idProduct: '1',
            idCategory: '1',
            title: 'La Zona Muerta',
            author: 'Stephen King',
            img: 'https://1.bp.blogspot.com/-dmtXwoyivMk/TwVn4mXe8SI/AAAAAAAAAaw/XRcZfc6V05c/s1600/zona_muerta_pirnc.jpg',
            stock: 5
        },
        {
            idProduct: '2',
            idCategory: '2',
            title: '¿Sueñan los Androides con Ovejas Electricas?',
            author: 'Philip K. Dick',
            img: 'https://pictures.abebooks.com/inventory/30056249805.jpg',
            stock: 3
        },
        {
            idProduct: '3',
            idCategory: '1',
            title: 'Los Límites de La Fundación',
            author: 'Isaac Asimov',
            img: 'https://imagessl9.casadellibro.com/a/l/t7/49/9788497594349.jpg',
            stock: 1
        }
    ];

    function Get_Producto(id)
    {
        for(let i = 0; i < PRODUCTOS.length; i++)
            if(PRODUCTOS[i].idProduct === id) return PRODUCTOS[i];

        return false;
    }

    async function mock()
    {
        return new Promise(function(resolve, reject)
        {
            setTimeout(function()
            {
                let product = Get_Producto(productId);
                product ? resolve([product]) : reject();
            }, 2000);
        });
    }

    useEffect(function()
    {
        mock()
        .then(response => setproductDetails(response))
        .catch(error => console.log(error));
    });

    return (
        productDetails.map(function(product)
        {
            return (
                <div key={product.idProduct}>
                    <div className="container-fluid articulo-detail-bg-container">
                        <div className="container-fluid articulo-detail-bg" style={{backgroundImage: `url(${product.img})` }}>
                        </div>
                    </div>

                    <div className="container m-auto mt-50" key={product.idProduct}>
                        <ItemDetail product={product}/>
                    </div>
                </div>
            );
        })
    );
}

export default ItemDetailContainer;