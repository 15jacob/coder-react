import ItemListContainer from './itemListContainer.jsx';
import ItemDetailContainer from './itemDetailContainer.jsx';

import { Routes, Route } from 'react-router-dom';

//La idea de este componente es de mantener el routing del contenido principal fuera de App.js
function MainContainer()
{
    return (
        <div className="container-fluid h-100 justify-content-center" id="main-container">
            <Routes>
                {/* Listado Index */}
                <Route path="/" element={<ItemListContainer/>}/>

                {/* Busquedas / Categorias */}
                <Route path="/:categoryId" element={<ItemListContainer message="No hemos encontrado resultados para ese termino, o no estamos seguros de que estás buscando, probá con otra cosa"/>}/>

                {/* Detalle Articulo */}
                <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
            </Routes>
        </div>
    );
}

export default MainContainer;