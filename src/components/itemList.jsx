import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Item from './Item.jsx';

//Fake Api
import {Get_Products, Get_Products_By_Category} from '../assets/js/ultra-fake-api.js';

function ItemList()
{
    const [productList, setProductList] = useState([]);
    const {categoryId} = useParams();

    async function mock()
    {
        return new Promise((resolve, reject) => resolve(categoryId ? Get_Products_By_Category(categoryId) : Get_Products()));
    }

    useEffect(function()
    {
        mock()
        .then(response => setProductList(response))
        .catch(error => console.log(error));
    }, [categoryId]);

    return (
        productList.map(function(product)
        {
            return <Item idProduct={product.idProduct} key={product.idProduct} title={product.title} author={product.author} img={product.img} stock={product.stock} price={product.price}/>
        })
    );
}

export default ItemList;