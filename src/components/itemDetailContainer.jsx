import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

import {Get_Products_By_Id} from '../assets/js/ultra-fake-api.js';

function ItemDetailContainer()
{
    const [productDetails, setproductDetails] = useState([]);
    const {productId} = useParams();

    async function mock()
    {
        return new Promise((resolve, reject) => resolve([Get_Products_By_Id(productId)]));
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