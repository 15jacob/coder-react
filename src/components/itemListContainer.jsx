import ItemCount from './itemCount.jsx';

import notificador_noresults from './../assets/img/u63/u63_noresults.svg';

function ItemListContainer({message = false})
{
    return (
        <div className="container-fluid h-100" id="main-container">
            <div className="mt-50">
                <hr className="break"/>
                <div className="row justify-center my-50">
                    <div className="col-12 d-flex">
                        <span className="f-24 fw-600i pr-10">{message}</span>
                        <img className="notificador no-results" src={notificador_noresults} alt="Sin Resultados"/>
                    </div>

                    <div className="col-2">
                        <ItemCount idProduct="15" stock="8"/>
                    </div>

                </div>
                <hr className="break"/>
            </div>
        </div>
    );
}

export default ItemListContainer;