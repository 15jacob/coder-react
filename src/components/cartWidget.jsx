import icon_cart from './../assets/img/u63/misc_cart.svg';

function CartWidget()
{
    return (
        <li className="d-inline-flex flex-wrap align-content-center btn-red c-pointer">
            <div className="row p-20">
                <img className="width-100" src={icon_cart} alt="Carrito"/>
            </div>
        </li>
    );
}

export default CartWidget;