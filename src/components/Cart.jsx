//import notificador_noresults from './../assets/img/u63/u63_noresults.svg';
import {useCartContext} from './CartContextProvider.jsx';

import {Get_Products_By_Id} from '../assets/js/ultra-fake-api.js';

function Cart()
{
    const {cartList} = useCartContext();

    return (
        <div className="container m-auto mt-50 px-50">
            <div className="row">
                <div className="col-8">
                {
                    cartList.map(function(cartItem)
                    {
                        //Por cada producto iterado, conseguimos sus datos con su ID
                        let product = Get_Products_By_Id(cartItem.id);
                        
                        if(product)
                        {
                            return (
                                <div className="row mb-10 bg-grey-14 box-shadow-1 b-dashed">
                                    <div className="col-4">
                                        <img src={product.img} alt="" />
                                    </div>

                                    <div className="col-8">
                                        <h2 className="f-24">{product.title}</h2>
                                        <h3 className="f-20 fw-600i mb-20">{product.author}</h3>
                                        <hr className="my-10" />
                                        {/*  <ItemCount idProduct={product.idProduct} stock={product.stock} price={product.price}/> */}
                                        CANTIDAAAAD
                                    </div>
                                </div>
                            )
                        }

                        return null;
                    })
                }
                </div>

                <div className="col-4">
                    <h2>Total:</h2>
                </div>  
            </div>
        </div>
    );
}

export default Cart;