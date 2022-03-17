//import React, { useEffect, useState } from 'react';
import ItemList from './itemList.jsx';

import notificador_noresults from './../assets/img/u63/u63_noresults.svg';

function ItemListContainer({message = false})
{    
    return (
        <div className="container-fluid h-100 justify-content-center" id="main-container">
            <div className="container m-auto mt-50">
                {//Por ahora esto no tiene uso
                /* <div className="row justify-center my-50">
                    <hr className="break"/>
                    <div className="col-12 d-flex">
                        <span className="f-24 fw-600i pr-10">{message}</span>
                        <img className="notificador no-results" src={notificador_noresults} alt="Sin Resultados"/>
                    </div>
                    <hr className="break"/>
                </div> */}

                <div className="row">
                    <ItemList/>
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;