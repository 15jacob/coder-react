
function ItemDetail({idProduct = false})
{
    return (
        <div className="row articulo-detail">
            <div className="col-12 col-md-4 d-flex justify-content-center">
                <img src="https://1.bp.blogspot.com/-dmtXwoyivMk/TwVn4mXe8SI/AAAAAAAAAaw/XRcZfc6V05c/s1600/zona_muerta_pirnc.jpg" alt="lalala" />
            </div>

            <div className="col-12 col-md-8 mt-100">
                <h2 className="f-30">LA ZONA MUERTA</h2>
                <h3 className="f-24 fw-600i">Stephen King</h3>

                <button className="btn-red my-10 f-20 fw-600i">Agregar Al Carrito</button>

                <hr className="my-10" />
                <p className="mb-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex maiores doloribus a laborum quae odit nemo corporis natus dolore rem sapiente impedit, porro molestias, ad mollitia autem labore! Aperiam, perferendis!</p>
                <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi reiciendis laudantium deleniti nemo aliquid? Temporibus asperiores sequi labore laudantium vero ducimus nesciunt nisi hic culpa ipsum! Perferendis ab blanditiis consequuntur.</p>
            </div>
        </div>
    );
}

export default ItemDetail;