//Styles
import './assets/css/ultra_css.css';
import './assets/css/custom.css';

//Components
import Header from './components/header.jsx';
import MainContainer from './components/mainContainer.jsx';

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
