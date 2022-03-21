import ItemListContainer from './itemListContainer.jsx';
import ItemDetailContainer from './itemDetailContainer.jsx';

function MainContainer()
{
    return (
        <div className="container-fluid h-100 justify-content-center" id="main-container">
            <ItemListContainer message="No hemos encontrado resultados para ese termino, o no estamos seguros de que estás buscando, probá con otra cosa"/>

            <hr className="mt-50"></hr>

            <div>
                <h6 className="d-inline-block w-100 t-center">Muestra provisoria de ItemDetailContainer / ItemDetail</h6>
            </div>

            <hr className="mb-50" />

            <ItemDetailContainer/>
        </div>
    );
}

export default MainContainer;