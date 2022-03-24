//Components
import Nav from './navBar.jsx';
import SideNavList from './sideNavList.jsx';

//Assets
import u63_logo from './../assets/img/u63/u63_logo.svg';
import { Link } from 'react-router-dom';

function Header()
{
    return (
        <>
            <header className="row bg-red">
                <Link to='/' className="col h-100 p-0 m-0 c-pointer" id="banner-container">
                    <img className="h-100" src={u63_logo} alt="Ultraman63 - Tienda de Libros" data-href="/" />
                </Link>

                <Nav className="col-auto p-0" type="header"/>
            </header>

            <SideNavList/>
        </>
    );
}

export default Header;
