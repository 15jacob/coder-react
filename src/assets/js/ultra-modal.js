/*------------------------------ ULTRA MODAL ------------------------------*/

function UltraModal_Order(modalOpening)
{
    let modals = $array('.modal-container .modal-body');

    //Chequeamos si se esta abriendo o cerrando un modal. Lo que definira si las clases a switchear seran para subir o bajar de nivel al mismo
    if(modalOpening === true)
    {
        for(let i = 0; i < modals.length; i++)
        {
            switch(true)
            {
                case(modals[i].hasClass('modal-hidden-80')): modals[i].toggleClass('modal-hidden-80 modal-hidden-60'); continue;
                case(modals[i].hasClass('modal-hidden-60')): modals[i].toggleClass('modal-hidden-60 modal-hidden-40'); continue;
                case(modals[i].hasClass('modal-hidden-40')): modals[i].toggleClass('modal-hidden-40 modal-hidden-20'); continue;
                case(modals[i].hasClass('modal-hidden-20')): modals[i].toggleClass('modal-hidden-20 modal-hidden-0'); continue;
                case(modals[i].hasClass('modal-hidden-0')): continue;

                //Es el modal que esta en primer plano, lo pasamos al segundo nivel
                default: modals[i].addClass('modal-hidden-80'); continue;
            }
        }
    }
    else
    {
        for(let i = modals.length-1; i >= 0; i--)
        {
            switch(true)
            {
                case(modals[i].hasClass('modal-hidden-80')): modals[i].removeClass('modal-hidden-80'); continue;
                case(modals[i].hasClass('modal-hidden-60')): modals[i].toggleClass('modal-hidden-60 modal-hidden-80'); continue;
                case(modals[i].hasClass('modal-hidden-40')): modals[i].toggleClass('modal-hidden-40 modal-hidden-60'); continue;
                case(modals[i].hasClass('modal-hidden-20')): modals[i].toggleClass('modal-hidden-20 modal-hidden-40'); continue;

                //Es un modal que esta en el ultimo plano, lo pasamos al cuarto nivel. Como pueden llegar a existir multiples en el ultimo nivel. Cortamos el bucle
                case(modals[i].hasClass('modal-hidden-0')): modals[i].toggleClass('modal-hidden-0 modal-hidden-20'); return;
            }
        }
    }
}

//Crea un Modal Base. Lo Appendeamosea, desactiva el scroll del resto del sitio y crea el evento requerido para poder cerrarlo
function UltraModal_New(innerModal)
{
    //Chequeamos si existe un background, sino, lo creamos
    if($count('#modal-bg') == 0) UltraModal_Background_New();

    //De haber otros modales abiertos los iremos colocando en un segundo plano cada vez mas lejos
    UltraModal_Order(true);

    //Creamos el nuevo ID del modal, en base a cuantos existen
    let newId = 'modal-' + $count('.modal-container') + 1;

    //Asignacion de IDs a Botones
    innerModal.find('.btn-modal-accept, btn-modal-reject, btn-modal-close').forEach(btn => btn.dataset.modal = newId);

    $elem('main').appendChild($htmlTree({
        parent: $htmlElement({tag: 'div', id: newId, class: 'modal-container container-fluid p-100'}),
        children: $htmlTree({
            parent: $htmlElement({tag: 'div', class: 'modal-body col-6 py-20 bg-white ascend-in'}),
            children: innerModal
        })
    }));

    return newId;
}

//Crea una nueva instancia de background paralos modales. El background pone en desenfoque el resto del sitio y deshabilita el scroll
function UltraModal_Background_New()
{
    $elem('main').appendChild($htmlElement({tag: 'div', id: 'modal-bg', class: 'container-fluid p-100 opacity-ease-in'}));
    $elem('body').style.overflow = 'hidden';
}

function UltraModal_Background_Close()
{
    //El Background solo deberia poder cerrarse cuando no existen mas modales abiertos
    if($count('.modal-container') == 0)
    {
        $elem('#modal-bg').toggleClass('opacity-ease-in opacity-ease-out');
        $elem('body').style.overflow = 'overlay';
        setTimeout(() => $elem('#modal-bg').remove(), 500);
    }
}

function UltraModal_Default_Close()
{
    let that = this;
    $elem(`#${that.dataset.modal} .modal-body`).toggleClass('opacity-ease-out');

    if($count('.modal-container'))
    {
        setTimeout(function()
        {
            $elem(`#${that.dataset.modal}`).remove();
            UltraModal_Order(false);
            UltraModal_Background_Close();
        }, 500);
    }
}

//Crea un modal con una alerta basica. Recibe un json con la configuracion. De no recibir datos creara una alerta generica de error
function UltraModal_Alert(data = {})
{
    return UltraModal_New($htmlTree({
        parent: $htmlElement({tag: 'div', class: 'row'}),
        children:
        {
            0: $htmlTree({
                parent: $htmlElement({tag: 'div', class: 'col-12'}),
                children:
                {
                    0: $htmlElement({tag: 'h3', class: 't-center mb-20', innerText: data.title ? data.title : 'Error'}),
                    1: $htmlElement({tag: 'span', class: 't-center f-20, d-inline-block w-100', innerText: data.description ? data.description : 'Ha ocurrido un error inesperado'})
                }
            }),
            1: $htmlElement({tag: 'hr', class: 'my-10'}),
            2: $htmlTree({
                parent: $htmlElement({tag: 'div', class: 'col-6 m-auto'}),
                children: function()
                {
                    let label = 'accept' in data && 'label' in data.accept ? data.accept.label : 'Ok';
                    let callback = 'accept' in data && 'callback' in data.accept ? data.accept.callback : UltraModal_Default_Close;

                    return [ $htmlElement({tag: 'button', class: 'btn-yellow btn-modal-accept', innerText: label, data: {modal: '0'}, event: {click: callback}}) ];
                }
            })
        }
    }));
}

//Crea un modal con un prompt Aceptar/Rechazar y posibilidad de Cancelar. Recibe un json con la configuracion
function UltraModal_Prompt(data = {})
{
    return UltraModal_New($htmlTree({
        parent: $htmlElement({tag: 'div', class: 'row'}),
        children:
        {
            0: $htmlTree({
                parent: $htmlElement({tag: 'div', class: 'col-12'}),
                children:
                {
                    0: $htmlElement({tag: 'h3', class: 't-center mb-20', innerText: data.title ? data.title : 'Error'}),
                    1: function()
                    {
                        if(data.description)
                            return $htmlElement({tag: 'span', class: 't-center f-20 d-inline-block w-100', innerText: data.description ? data.description : 'Ha ocurrido un error inesperado'});
                        
                        return null;
                    }
                }
            }),
            1: $htmlElement({tag: 'hr', class: 'my-10'}),
            2: function()
            {
                let label = 'accept' in data && 'label' in data.accept ? data.accept.label : 'Aceptar';
                let callback = 'accept' in data && 'callback' in data.accept ? data.accept.callback : UltraModal_Default_Close;

                return $htmlTree({
                    parent: $htmlElement({tag: 'div', class: 'col'}),
                    children: $htmlElement({tag: 'button', class: 'btn-dark btn-modal-accept', innerText: label, event: {click: callback}})
                });
            },
            3: function()
            {
                let label = 'reject' in data && 'label' in data.reject ? data.reject.label : 'Rechazar';
                let callback = 'reject' in data && 'callback' in data.reject ? data.reject.callback : UltraModal_Default_Close;

                return $htmlTree({
                    parent: $htmlElement({tag: 'div', class: 'col'}),
                    children: $htmlElement({tag: 'button', class: 'btn-red btn-modal-reject', innerText: label, data: {modal: '0'}, event: {click: callback}})
                });
            },
            4: function()
            {
                if(!data.cancel) return null;

                let label = 'cancel' in data && 'label' in data.cancel ? data.cancel.label : 'Cancelar';
                let callback = 'cancel' in data && 'callback' in data.cancel ? data.cancel.callback : UltraModal_Default_Close;

                return $htmlTree({
                    parent: $htmlElement({tag: 'div', class: 'col'}),
                    children: $htmlElement({tag: 'button', class: 'btn-blue btn-modal-close', innerText: label, data: {modal: '0'}, event: {click: callback}})
                });
            },

        }
    }));
}

//Crea un modal para la actualizacion rapida del stock de un articulo
function UltraModal_Stock(idArticulo)
{
    let json =
    {
        call: 'Get_Stock_Articulo',
        idArticulo
    };

    return XHR(json, function(response)
    {
        //Si se recibe el articulo correctamente vamos a crear el modal para ajustar su stock
        if(response)
        {
            let modalId = UltraModal_New($htmlTree({
                parent: $htmlElement({tag: 'div', class: 'row'}),
                children:
                {
                    0: $htmlTree({
                        parent: $htmlElement({tag: 'div', class: 'col-12'}),
                        children:
                        {
                            0: $htmlElement({tag: 'h5', class: 't-center mb-20', innerText: 'Modificar Stock'}),
                            1: $htmlElement({tag: 'span', class: 't-center f-20, d-inline-block w-100', innerText: response.title})
                        }
                    }),
                    1: $htmlTree({
                        parent: $htmlElement({tag: 'div', class: 'col-6 m-auto'}),
                        children: $htmlTree({
                            parent: $htmlElement({tag: 'div', class: 'row'}),
                            children:
                            {
                                0: $htmlTree({
                                    parent: $htmlElement({tag: 'div', class: 'col'}),
                                    children: $htmlElement({tag: 'button', class: 'btn-red h-100 px-20 mod-stock', data: {action: '-'}, innerText: '-'}),
                                }),
                                1: $htmlTree({
                                    parent: $htmlElement({tag: 'div', class: 'col'}),
                                    children: $htmlElement({tag: 'input', class: 't-center', id: 'new-stock', type: 'text', value: response.stock, data: {idArticulo: idArticulo}}),
                                }),
                                2: $htmlTree({
                                    parent: $htmlElement({tag: 'div', class: 'col'}),
                                    children: $htmlElement({tag: 'button', class: 'btn-red h-100 px-20 mod-stock', data: {action: '+'}, innerText: '+'}),
                                }),
                            }
                        })
                    }),
                    2: $htmlElement({tag: 'hr', class: 'my-10'}),
                    3: $htmlTree({
                        parent: $htmlElement({tag: 'div', class: 'col'}),
                        children: $htmlElement({tag: 'button', class: 'btn-dark btn-modal-close', data: {modal: '0'}, innerText: 'Cancelar'})
                    }),
                    4: $htmlTree({
                        parent: $htmlElement({tag: 'div', class: 'col'}),
                        children: $htmlElement({tag: 'button', class: 'btn-blue btn-modal-accept', data: {modal: '0'}, innerText: 'Aceptar'})
                    }),
                }
            }));

            //Si se creo el modal correctamente creamos los eventos
            if(modalId)
            {
                $elem('.btn-modal-close[data-modal="0"]').addEventListener('click', UltraModal_Default_Close);
                $elem('.btn-modal-close[data-modal="0"]').dataset.modal = modalId;

                $elem('.btn-modal-accept[data-modal="0"]').focus();
                $elem('.btn-modal-accept[data-modal="0"]').addEventListener('click', Set_New_Stock);
                $elem('.btn-modal-accept[data-modal="0"]').dataset.modal = modalId;

                $array('.mod-stock').addEvent('click', function()
                {
                    let newStock = parseInt($elem('#new-stock').value);

                    if(this.dataset.action == '-')
                        newStock != 0 ? newStock-- : null;
                    else
                        newStock++;

                    $elem('#new-stock').value = newStock;
                })
            }
        }

        return modalId;
    });
}

/*------------------------------ END ULTRA MODAL ------------------------------*/
