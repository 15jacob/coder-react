import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

import { doc, getDoc, getFirestore } from 'firebase/firestore';

function ItemDetailContainer()
{
    const [productDetails, setProductDetails] = useState({});
    const {productId} = useParams();

    useEffect(function()
    {
        const queryDoc = doc(getFirestore(), 'items', productId);

        getDoc(queryDoc)
        .then(function(producto)
        {
            setProductDetails({id: producto.id, ...producto.data()});
        });
    }, [productId]);

    return (
        <div key={productDetails.idProduct}>
            <div className="container-fluid articulo-detail-bg-container">
                <div className="container-fluid articulo-detail-bg" style={{backgroundImage: `url('${productDetails.img}')` }}>
                </div>
            </div>

            <div className="container m-auto mt-50" key={productDetails.idProduct}>
                <ItemDetail product={productDetails}/>
            </div>
        </div>
    );
}

export default ItemDetailContainer;