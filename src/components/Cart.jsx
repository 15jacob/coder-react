import { useEffect, useState } from 'react';
import {useCartContext} from './CartContextProvider.jsx';

import ItemCount from './ItemCount.jsx';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Cart()
{
    const {cartList} = useCartContext();
    const [arrayProducts, setArrayProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(function()
    {
        setTotal(0);
        setArrayProducts([]);

        for(let i = 0; i < cartList.length; i++)
        {
            const queryDoc = doc(getFirestore(), 'items', cartList[i].id);

            getDoc(queryDoc)
            .then(function(product)
            {
                setArrayProducts([...arrayProducts, {id: product.id, selected: cartList[i].selected, ...product.data()}]);
                setTotal(total + (product.data().price * cartList[i].selected));
            });
        }
    }, [cartList]);

    return (
        <div className="container m-auto mt-50 px-50">
            <div className="row justify-center px-50">
                <div className="col-8">
                {
                    arrayProducts.length > 0 ?
                        arrayProducts.map(function(product)
                        {
                            if(product)
                            {
                                console.log(product);

                                return (
                                    <div key={product.idProduct} className="row mb-10 bg-grey-14 box-shadow-1 b-dashed">
                                        <div className="col-4">
                                            <img src={product.img} alt={product.title} />
                                        </div>

                                        <div className="col-8">
                                            <h2 className="f-24">{product.title}</h2>
                                            <h3 className="f-20 fw-600i mb-20">{product.author}</h3>
                                            <hr className="my-10" />
                                            <ItemCount idProduct={product.id} cartSelected={product.selected} stock={product.stock} price={product.price} cartView={true} />
                                        </div>
                                    </div>
                                );
                            }

                            return null;
                        })
                    :
                        <>
                            <hr className="my-20" />
                            <span className="d-inline-block w-100 f-24 fw-600i t-center">Aún no has agregado ningun articulo al carrito,<br/> date una vuelta por la tienda primero</span>
                            <hr className="my-20" />
                        </>
                }
                {
                    //Esta sintaxis oh por dios santo..
                    cartList.length > 0 ?
                        <>
                            <hr className="my-20" />
                            <h2 className="t-right">Total: ${total.toFixed(2)}.-</h2>
                            <span className="d-inline-block w-100 f-20 t-right">No incluye tarifa de envio</span>
                            <hr className="my-20" />
                            <Link to={'/checkout'}><button className="btn-dark">Finalizar Compra</button></Link>
                        </>
                    :
                        null
                }
                </div>
            </div>
        </div>
    );
}

export default Cart;