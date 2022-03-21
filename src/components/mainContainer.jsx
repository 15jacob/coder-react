import ItemListContainer from './itemListContainer.jsx';
import ItemDetailContainer from './itemDetailContainer.jsx';

//La idea de este componente es de mantener el routing del contenido principal fuera de App.js
function MainContainer()
{
    return (
        <div className="container-fluid h-100 justify-content-center" id="main-container">
            <hr className="mt-50"></hr>
            <h6 className="d-inline-block w-100 t-center">Muestra provisoria de ItemListContainer / ItemList / Item</h6>
            <hr className="mb-50" />

            <ItemListContainer message="No hemos encontrado resultados para ese termino, o no estamos seguros de que estás buscando, probá con otra cosa"/>

            <hr className="mt-50"></hr>
            <h6 className="d-inline-block w-100 t-center">Muestra provisoria de ItemDetailContainer / ItemDetail</h6>
            <hr className="mb-50" />

            <ItemDetailContainer/>
        </div>
    );
}

export default MainContainer;