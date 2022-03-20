import ItemListContainer from './itemListContainer.jsx';
import ItemDetailContainer from './itemDetailContainer.jsx';

function MainContainer()
{
    return (
        <div className="container-fluid h-100 justify-content-center" id="main-container">
            <ItemListContainer message="No hemos encontrado resultados para ese termino, o no estamos seguros de que estás buscando, probá con otra cosa"/>
            <hr className="my-10"></hr>
            <ItemDetailContainer/>
        </div>
    );
}

export default MainContainer;