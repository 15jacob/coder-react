/*------------------------------ HTML TREE ------------------------------*/

//Crea un elemento HTML, recibe la etiqueta, sus propiedades y atributos dentro de un json
const $htmlElement = function(json)
{
    let element = $create(json.tag);
    delete json.tag;

    //Asignacion de Clases
    if('class' in json && json.class !== '' && json.class !== null)
    {
        element.addClass(json.class);
        delete json.class;
    }
    
    //Asignacion de Data Attributes
    if('data' in json)
    {
        let dataKeys = Object.keys(json.data);
        let dataValues = Object.values(json.data);

        for(let i = 0; i < dataKeys.length; i++)
            if(dataValues[i] !== null) element.dataset[dataKeys[i]] = dataValues[i];

        delete json.data;
    }

    //Asignacion de Eventos
    if('event' in json)
    {
        let eventKeys = Object.keys(json.event);
        let eventValues = Object.values(json.event);

        for(let i = 0; i < eventKeys.length; i++)
            if(eventValues[i] !== null) element.addEventListener(eventKeys[i], eventValues[i]);

        delete json.event;
    }

    //Asignaciones sencillas
    let keys = Object.keys(json);
    let values = Object.values(json);
    
    for(let i = 0; i < keys.length; i++)
        element[keys[i]] = values[i];

    return element;
}

//Crea un arbol de elementos HTML organizados via json
const $htmlTree = function(json)
{
    //Declaramos al parent como tree, de donde se apendearan todos los children
    let parent = json.parent;

    if(typeof parent === 'function')
        parent = parent();
    else
    {
        //Si existen children en el json los procesamos
        if('children' in json && json.children !== null)
        {
            let children = json.children;
            let keys = Object.keys(json.children);

            if(typeof children === 'function' || keys.length > 0)
            {
                let values = keys.length > 0 ? Object.values(children) : children();

                if(values.length > 0)
                {
                    for(let i = 0; i < values.length; i++)
                    {
                        let value = values[i];
                        if(typeof values[i] === 'function') value = value();
                        if(value) parent.appendChild(value);
                    }
                }
            }
            else
                parent.appendChild(json.children);
        }
    }

    return parent;
}

/*------------------------------ END HTML TREE ------------------------------*/
