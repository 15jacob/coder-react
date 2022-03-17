import React, { useState } from 'react';
import Item from './item.jsx';

function ItemList()
{
    const [productList, productListHandler] = useState([]);

    async function mock()
    {
        return new Promise(function(resolve, reject)
        {
            setTimeout(function()
            {
                resolve([
                {
                    idProduct: '11',
                    title: 'La Zona Muerta',
                    author: 'Stephen King',
                    img: 'https://1.bp.blogspot.com/-dmtXwoyivMk/TwVn4mXe8SI/AAAAAAAAAaw/XRcZfc6V05c/s1600/zona_muerta_pirnc.jpg',
                    stock: 5
                },
                {
                    idProduct: '26',
                    title: '¿Sueñan los Androides con Ovejas Electricas?',
                    author: 'Philip K. Dick',
                    img: 'https://pictures.abebooks.com/inventory/30056249805.jpg',
                    stock: 3
                },
                {
                    idProduct: '08',
                    title: 'Los Límites de La Fundación',
                    author: 'Isaac Asimov',
                    img: 'https://imagessl9.casadellibro.com/a/l/t7/49/9788497594349.jpg',
                    stock: 1
                }]);
            }, 2000);
        });
    }

    useState(function()
    {
        mock().then(function(response)
        {
            productListHandler(response);
        });
    }, []);

    return (
        productList.map(product => <Item idProduct={product.idProduct} title={product.title} author={product.author} img={product.img} stock={product.stock}/> )
    );
}

export default ItemList;