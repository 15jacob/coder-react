//Styles
import './assets/css/ultra-css.css';
import './assets/css/custom.css';

//Context
import CartContextProvider from './components/CartContextProvider.jsx';

//Components
import Header from './components/Header.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getFireStoreApp } from './firebase/config.js';

function App()
{
    return(
        <BrowserRouter>
            <CartContextProvider>
                <Header/>
            
                <div className="container-fluid h-100 justify-content-center" id="main-container">
                    <Routes>
                        {/* Listado Index */}
                        <Route path="/" element={<ItemListContainer/>}/>

                        {/* Busquedas / Categorias */}
                        <Route path="/:idCategory" element={<ItemListContainer message="No hemos encontrado resultados para ese termino, o no estamos seguros de que estás buscando, probá con otra cosa"/>}/>

                        {/* Detalle Articulo */}
                        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>

                        {/* Detalle Carrito */}
                        <Route path="/cart" element={<Cart/>}/>

                        {/* Checkout */}
                        <Route path="/checkout" element={<Checkout/>}/>
                    </Routes>
                </div>
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;
