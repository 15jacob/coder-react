import React, { useState, useEffect } from 'react';
import Item from './item.jsx';

function ItemList()
{
    const [productList, setProductList] = useState([]);

    //Pendiente de pasar a un JSON que haga mock de una API para no repetirlo en dos componentes separados
    const PRODUCTOS =
    [
        {
            idProduct: '1',
            title: 'La Zona Muerta',
            author: 'Stephen King',
            img: 'https://1.bp.blogspot.com/-dmtXwoyivMk/TwVn4mXe8SI/AAAAAAAAAaw/XRcZfc6V05c/s1600/zona_muerta_pirnc.jpg',
            stock: 5
        },
        {
            idProduct: '2',
            title: '¿Sueñan los Androides con Ovejas Electricas?',
            author: 'Philip K. Dick',
            img: 'https://pictures.abebooks.com/inventory/30056249805.jpg',
            stock: 3
        },
        {
            idProduct: '3',
            title: 'Los Límites de La Fundación',
            author: 'Isaac Asimov',
            img: 'https://imagessl9.casadellibro.com/a/l/t7/49/9788497594349.jpg',
            stock: 1
        }
    ];

    async function mock()
    {
        return new Promise(function(resolve, reject)
        {
            setTimeout(function()
            {
                resolve(PRODUCTOS);
            }, 2000);
        });
    }

    useEffect(function()
    {
        mock()
        .then(function(response)
        {
            setProductList(response);
        })
        .catch(function(error)
        {
            console.log(error);
        });
    });

    return (
        productList.map(function(product)
        {
            return <Item idProduct={product.idProduct} key={product.idProduct} title={product.title} author={product.author} img={product.img} stock={product.stock}/>
        })
    );
}

export default ItemList;