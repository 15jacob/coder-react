//Styles
import './assets/css/ultra_css.css';
import './assets/css/custom.css';

//Components
import Header from './components/header.jsx';
import ItemListContainer from './components/itemListContainer.jsx';

function App()
{
    return(
        <>
            <Header/>
            <ItemListContainer message="No hemos encontrado resultados para ese termino, o no estamos seguros de que estás buscando, probá con otra cosa"/>
        </>
    );
}

export default App;
