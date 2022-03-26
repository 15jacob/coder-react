//Styles
import './assets/css/ultra-css.css';
import './assets/css/custom.css';

//Components
import Header from './components/Header.jsx';
import MainContainer from './components/MainContainer.jsx';

import { BrowserRouter } from 'react-router-dom';

function App()
{
    return(
        <BrowserRouter>
            <Header/>
            <MainContainer/>
        </BrowserRouter>
    );
}

export default App;
