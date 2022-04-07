import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Item from './Item.jsx';

import { collection, getDocs, getFirestore } from 'firebase/firestore';

function ItemList()
{
    const [productList, setProductList] = useState([]);
    const {categoryId} = useParams();

    useEffect(function()
    {
        const queryCollection = collection(getFirestore(), 'items')
        
        getDocs(queryCollection)
        .then(function(response)
        {
            setProductList(response.docs.map(function(producto)
            {
                return {id: producto.id, ...producto.data()}
            }));
        });

        console.log(productList);
    }, [categoryId]);

    return (
        productList.map(function(product)
        {
            return <Item idProduct={product.id} key={product.id} title={product.title} author={product.author} img={product.img} stock={product.stock} price={product.price}/>
        })
    );
}

export default ItemList;