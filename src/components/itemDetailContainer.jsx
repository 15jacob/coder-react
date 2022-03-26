import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

function ItemDetailContainer()
{
    const [productDetails, setproductDetails] = useState([]);
    const { productId } = useParams();

    //Pendiente de pasar a un JSON que haga mock de una API para no repetirlo en dos componentes separados
    const PRODUCTS =
    [
        {
            idProduct: '1',
            idCategory: '1',
            title: '1984',
            author: 'George Orwell',
            img: require('../assets/img/articulos/1984_Penguin_Books.jpg'),
            stock: 5
        },
        {
            idProduct: '2',
            idCategory: '3',
            title: '20000 Leguas de Viaje Submarino',
            author: 'Julio Verne',
            img: require('../assets/img/articulos/20000_Leguas_De_Viaje_Submarino_Amable.jpg'),
            stock: 3
        },
        {
            idProduct: '3',
            idCategory: '1',
            title: 'Doce y el Verdugo',
            author: 'Alfred Hitchcock',
            img: require('../assets/img/articulos/Alfred_Hitchcock_Doce_Y_El_Verdugo.jpg'),
            stock: 12
        },
        {
            idProduct: '4',
            idCategory: '1',
            title: 'Animal Farm',
            author: 'George Orwell',
            img: require('../assets/img/articulos/Animal_Farm.jpg'),
            stock: 2
        },
        {
            idProduct: '5',
            idCategory: '2',
            title: 'Batman vs Aliens',
            author: null,
            img: require('../assets/img/articulos/Batman_Aliens_1_de_2.jpg'),
            stock: 1
        },
        {
            idProduct: '6',
            idCategory: '1',
            title: 'Camino a Mandalay',
            author: 'John Masters',
            img: require('../assets/img/articulos/Camino_A_Mandalay.jpg'),
            stock: 4
        },
        {
            idProduct: '7',
            idCategory: '3',
            title: 'Cine Fantastico y Bizarro Nº28',
            author: null,
            img: require('../assets/img/articulos/Cine_Fantastico_Y_Bizarro_28.jpg'),
            stock: 7
        },
        {
            idProduct: '8',
            idCategory: '2',
            title: 'Superman Nº579',
            author: null,
            img: require('../assets/img/articulos/Superman_Novaro_579.jpg'),
            stock: 5
        },
        {
            idProduct: '9',
            idCategory: '1',
            title: 'Todo es Eventual',
            author: 'Stephen King',
            img: require('../assets/img/articulos/Todo_Es_Eventual.jpg'),
            stock: 2
        },
        {
            idProduct: '10',
            idCategory: '1',
            title: 'Ultraje',
            author: 'Henry Denker',
            img: require('../assets/img/articulos/Ultraje.jpg'),
            stock: 3
        }
    ];

    function Get_Producto(id)
    {
        for(let i = 0; i < PRODUCTS.length; i++)
            if(PRODUCTS[i].idProduct === id) return PRODUCTS[i];

        return false;
    }

    async function mock()
    {
        return new Promise((resolve, reject) => resolve([Get_Producto(productId)]));
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