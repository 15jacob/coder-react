function SideNavList()
{
    return (
        <div className="close h-100" id="side-nav">
            <ul>
                <li className="d-flex flex-wrap align-content-center fw-600i c-pointer">Inicio</li>
                <li className="d-flex flex-wrap align-content-center fw-600i c-pointer">Novelas</li>
                <li className="d-flex flex-wrap align-content-center fw-600i c-pointer">Comics e Historietas</li>
                <li className="d-flex flex-wrap align-content-center fw-600i c-pointer">Ciencia Ficcion</li>
                <li className="d-flex flex-wrap align-content-center fw-600i c-pointer">Terror</li>
                <li className="d-flex flex-wrap align-content-center fw-600i c-pointer">Biografías</li>
            </ul>
        </div>
    );
}

export default SideNavList;