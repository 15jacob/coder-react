//Styles
import './assets/css/ultra-css.css';
import './assets/css/custom.css';

//Components
import Header from './components/Header.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';

import { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const CONTEXT_CART = createContext("lala");

function App()
{
    const [cart, setCart] = useState([]);

    return(
        <BrowserRouter>
            <Header/>

            <CONTEXT_CART.Provider value={{cart, setCart}}>
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
            </CONTEXT_CART.Provider>
        </BrowserRouter>
    );
}

export default App;
