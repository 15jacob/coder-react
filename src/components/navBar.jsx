import CartWidget from './cartWidget.jsx';
import SideNavToggler from './sideNavToggler.jsx';

function Nav({className, type = 'header'})
{
    return (
        <nav className={className} id={type === 'header' ? 'nav-header' : 'nav-footer'}>
            <ul className="d-flex align-items-center h-100">
                <CartWidget/>
                <SideNavToggler/>
            </ul>
        </nav>
    );
}

export default Nav;