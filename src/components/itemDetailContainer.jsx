import React, { useState, useEffect } from 'react';
import ItemDetail from './itemDetail.jsx';

function ItemDetailContainer()
{
    const [productDetails, setproductDetails] = useState([]);

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
                }]);
            }, 2000);
        });
    }

    useEffect(function()
    {
        mock()
        .then(function(response)
        {
            setproductDetails(response);
        })
        .catch(function(error)
        {
            console.log(error);
        });
    });

    return (
        productDetails.map(function(product)
        {
            return (
                <>
                    <div className="container-fluid articulo-detail-bg-container">
                        <div className="container-fluid articulo-detail-bg" style={{backgroundImage: `url(${product.img})` }}>
                        </div>
                    </div>

                    <div className="container m-auto mt-50" key={product.idProduct}>
                        <ItemDetail product={product}/>
                    </div>
                </>
            );
        })
    );
}

export default ItemDetailContainer;