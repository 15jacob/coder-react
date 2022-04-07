import ItemCount from './ItemCount.jsx';

function ItemDetail({product})
{
    return (
        <div className="row articulo-detail" id={'articulo-' + product.idProduct} key={product.idProduct}>
            <div className="col-12 col-md-4 d-flex justify-content-center">
                <img src={require(`../assets/img/articulos/${product.img}`)} alt={product.title} />
            </div>

            <div className="col-12 col-md-8 mt-100">
                <h2 className="f-30">{product.title}</h2>
                <h3 className="f-24 fw-600i mb-20">{product.author}</h3>
                <ItemCount idProduct={product.idProduct} stock={product.stock} price={product.price}/>
                <hr className="my-10" />
                <p className="mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex maiores doloribus a laborum quae odit nemo corporis natus dolore rem sapiente impedit, porro molestias, ad mollitia autem labore! Aperiam, perferendis!</p>
                <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reiciendis laudantium deleniti nemo aliquid? Temporibus asperiores sequi labore laudantium vero ducimus nesciunt nisi hic culpa ipsum! Perferendis ab blanditiis consequuntur.</p>
            </div>
        </div>
    );
}

export default ItemDetail;