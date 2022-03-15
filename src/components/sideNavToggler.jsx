import React, { useEffect } from 'react';

function SideNavToggler()
{
    useEffect(function()
    {
        //Asignamos el evento para abrir y cerrar la side-nav
        document.querySelector('#side-nav-toggler').addEventListener('click', Toggle_Side_Nav);
    });

    function Toggle_Side_Nav()
    {
        document.querySelector('#side-nav').classList.toggle('open');
        document.querySelector('#side-nav').classList.toggle('close');
    }

    return (
        <li className="d-flex flex-wrap align-content-center px-30 btn-red c-pointer" id="side-nav-toggler" /*  onClick={Toogle_Side_Nav} */>
            <div className="row">
                <span className="bt-solid bw-2 b-white my-5 w-100"></span>
                <span className="bt-solid bw-2 b-white my-5 w-100"></span>
                <span className="bt-solid bw-2 b-white my-5 w-100"></span>
            </div>
        </li>
    );
}

export default SideNavToggler;