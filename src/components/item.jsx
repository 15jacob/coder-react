import {Link} from 'react-router-dom';
import ItemCount from './ItemCount.jsx';

function Item({idProduct = null, title = null, author = null, img = null, stock = 0})
{
    return (
        <div className="col-6 col-md-3 col-lg-2 item-count">
            <div className="row b-dashed">
                <Link className="t-decoration-none" to={`/detail/${idProduct}`}>
                    <div className="col-12">
                        <img src={img} alt={title} />

                        <hr className="my-10" />

                        <span className='d-inline-block w-100 f-20'>{title}</span>
                        <span className="d-inline-block w-100 fw-600i">{author}</span>
                    </div>
                </Link>

                <ItemCount idProduct={idProduct} stock={stock}/>
            </div>
        </div>
    );
}

export default Item;