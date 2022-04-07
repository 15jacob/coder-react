import {Link} from 'react-router-dom';
import ItemCount from './ItemCount.jsx';

function Item({idProduct = null, title = null, author = null, img = null, stock = 0, price = 0})
{
    return (
        <div className="col-6 col-md-3 col-lg-2 item-count">
            <div className="row b-dashed bg-grey-14 box-shadow-1">
                <div className="col-12">
                    <Link className="t-decoration-none" to={`/detail/${idProduct}`}>
                        <img src={require(`../assets/img/articulos/${img}`)} alt={title} />

                        <hr className="my-10" />

                        <span className='d-inline-block w-100 f-20'>{title}</span>
                        <span className="d-inline-block w-100 fw-600i mb-10">{author}</span>
                    </Link>

                    <ItemCount idProduct={idProduct} stock={stock} price={price}/>
                </div>
            </div>
        </div>
    );
}

export default Item;