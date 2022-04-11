import { addDoc, collection, doc, getDoc, getFirestore } from 'firebase/firestore';

import { useCartContext } from './CartContextProvider.jsx';
import { useEffect, useState } from 'react';

function Cart()
{
    const {cartList} = useCartContext();
    const [total, setTotal] = useState(0);

    function sendOrderHandler()
    {
        let buyerData =
        {
            name: document.getElementById('checkout-name').value,
            phone: document.getElementById('checkout-phone').value,
            email: document.getElementById('checkout-email').value
        }

        if(buyerData.name && buyerData.phone && buyerData.email)
        {
            const db = getFirestore();
            const queryCollection = collection(db, 'orders');

            const orden =
            {
                buyer: buyerData,
                items: cartList,
                //No logro que firestore me cree el timestamp correcto asi que tengo que hacer este horror
                date: `${new Date().getFullYear()}-${('00' + (new Date().getMonth() + 1)).slice(-2)}-${new Date().getDate()} ${('00' + new Date().getHours()).slice(-2)}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
                total: total
            }

            addDoc(queryCollection, orden)
            .then(function(response)
            {
                console.log(response);
            });
        }
        else
            console.log("CAMPOS SIN COMPLETAR");
    }

    useEffect(function()
    {
        setTotal(0);

        for(let i = 0; i < cartList.length; i++)
        {
            const queryDoc = doc(getFirestore(), 'items', cartList[i].id);

            getDoc(queryDoc)
            .then(product => setTotal(total + (product.data().price * cartList[i].selected)));
        }
    }, [cartList]);

    return (
        <div className="container m-auto mt-50 px-50">
            <div className="row justify-center px-50">
                <div className="col-8">
                    <input className="my-10" id="checkout-name" type="text" placeholder='Nombre' />
                    <input className="my-10" id="checkout-phone" type="number" placeholder='Teléfono' />
                    <input className="my-10" id="checkout-email" type="email" placeholder='E-Mail' />
                    <button className="btn-dark" onClick={sendOrderHandler}>Confirmar Pedido</button>
                </div>
            </div>
        </div>
    );
}

export default Cart;