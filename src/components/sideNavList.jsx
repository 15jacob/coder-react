import {Link} from "react-router-dom";

function SideNavList()
{
    const CATEGORIAS =
    [
        {id: '1', label: 'Novelas'},
        {id: '2', label: 'Comics e Historietas'},
        {id: '3', label: 'Ciencia Ficcion'},
        {id: '4', label: 'Terror'},
        {id: '5', label: 'Biografías'}
    ];

    return (
        <div className="close h-100" id="side-nav">
            <ul>
                <Link className="t-decoration-none" to='/'><li className="d-flex flex-wrap align-content-center fw-600i c-pointer">Inicio</li></Link>

                {
                    CATEGORIAS.map(function(categoria)
                    {
                        return <Link className="t-decoration-none" to={`/${categoria.id}`} key={categoria.id}><li className="d-flex flex-wrap align-content-center fw-600i c-pointer">{categoria.label}</li></Link>
                    })
                }
            </ul>
        </div>
    );
}

export default SideNavList;