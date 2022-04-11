import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Item from './Item.jsx';

import { collection, getDocs, getFirestore } from 'firebase/firestore';

function ItemList()
{
    const [productList, setProductList] = useState([]);
    const {idCategory} = useParams();

    useEffect(function()
    {
        const queryCollection = collection(getFirestore(), 'items');

        //Esto no esta limpiando el array
        setProductList([]);
        
        getDocs(queryCollection)
        .then(function(response)
        {

            response.docs.map(function(producto)
            {
                if(idCategory === undefined || producto.data().idCategory === idCategory)
                {
                    //Al no limpiarse el array previo al getDocs, productList empieza a acumular productos
                    setProductList([...productList, {id: producto.id, ...producto.data()}]);
                }

                return false;
            })
        });
    }, [idCategory]);

    return (
        productList.length > 0 ?
            productList.map(function(product)
            {
                return <Item idProduct={product.id} key={product.id} title={product.title} author={product.author} img={product.img} stock={product.stock} price={product.price}/>
            })
        :
            <>
                <hr className="my-20" />
                <span className="d-inline-block w-100 f-24 fw-600i t-center">No hay productos en esta categoría :(</span>
                <hr className="my-20" />
            </>
    );
}

export default ItemList;