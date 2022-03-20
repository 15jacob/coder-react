/*------------------------------ CONST ------------------------------*/

const LOCAL_REGION = 'es-ES'; 
const CURRENT_DATE = new Date();
const MONTH_NAMES =
{
    1: "Enero",
    2: "Febrero",
    3: "Marzo",
    4: "Abril",
    5: "Mayo",
    6: "Junio",
    7: "Julio",
    8: "Agosto",
    9: "Septiembre",
    10: "Octubre",
    11: "Noviembre",
    12: "Diciembre"
}

/*------------------------------ END CONST ------------------------------*/


/*------------------------------ NODE METHODS ------------------------------*/

//Agrega la o las clases indicadas al elemento HTML indicado
Node.prototype.addClass = function(x)
{
    if(x === null) return false;
    x = x.split(' ');

    //Iteramos todas las clases indicadas y las colocamos al elemento llamado
    for(let i = 0; i < x.length; i++)
        this.classList.add(x[i]);
}

//Quita la o las clases indicadas al elemento HTML indicado
Node.prototype.removeClass = function(x)
{
    if(x === null) return false;
    x = x.split(' ');

    //Iteramos todas las clases indicadas y las colocamos al elemento llamado
    for(let i = 0; i < x.length; i++)
        this.classList.remove(x[i]);
}

//Switchea entre clases agregadas o no al elemento HTML indicado
Node.prototype.toggleClass = function(x)
{
    if(x === null) return false;
    x = x.split(' ');

    for(let i = 0; i < x.length; i++)
        this.classList.toggle(x[i]);
}

//Agrega todas las clases indicadas en X, quita todas las clases indicadas en y
Node.prototype.switchClass = function(x, y)
{
    this.addClass(x);
    this.removeClass(y);
}

//Chequea si un elemento contiene una clase indicada
Node.prototype.hasClass = function(x)
{
    if(this.classList.contains(x))
        return true;

    return false;
}

//Chequea si un elemento contiene cualquiera de las clases indicadas
Node.prototype.hasAnyClass = function(x)
{
    x = x.split(' ');

    for(let i = 0; i < x.length; i++)
        if(this.classList.contains(x[i])) return true;

    return false;
}

//Setea values de Inputs, Textarea y Ultraselect. Puede recibir un array con multiples valores 
/* Node.prototype.setValue = function(x)
{
    //Si es un array, lo separamos en diferentes valores y usamos recursividad
    if(Array.isArray(x))
        for(let i = 0; i < x.length; i++) this.setValue(x[i]);
    else
    {
        if(this.parentNode.classList.contains('ultra-select'))
            UltraSelect_Set_Value.call(this.find(`span[data-value="${x}"]`)[0]);
        else
        {
            if(this.type == 'number')
            {
                if(isNaN(x)) return;
                if(this.step == "1") x = parseInt(x);
            }

            this.value = x;
        }
    }
} */

//Obtiene los values seleccionados dentro de un Input, Textarea o Ultraselect
Node.prototype.getValue = function()
{
    if(this.tagName != 'UL')
        return this.value;
    else
    {
        let selectedOptions = this.find('li.selected');
        let values = [];

        for(let i = 0; i < selectedOptions.length; i++)
            values.push(selectedOptions[i].dataset.value);

        return this.dataset.multiple > 0 ? values : values[0];
    }
}

//Obtiene los id y values seleccionados dentro de un Input, Textarea o Ultraselect. Devolviendolos como json
Node.prototype.getIdValue = function()
{
    if(this.tagName != 'UL')
        return {id: this.id, value: this.value};
    else
    {
        let selectedOptions = this.find('li.selected');
        let values = [];

        for(let i = 0; i < selectedOptions.length; i++)
            values.push(selectedOptions[i].dataset.value);

        return {id: this.id, value: this.dataset.multiple > 0 ? values : values[0]};
    }
}

//Obtiene los archivos que hayan sido seleccionados dentro de un Input de tipo file. De no existir, devuelve nulo
Node.prototype.getFile = function()
{
    return this.files.length ? {name: this.id, file: this.files[0]} : null;
}

//Encuentra elementos indicados dentro del elemento que se llame. Devuelve un array con los mismos
Node.prototype.find = function(x)
{
    return Array.from(this.querySelectorAll(x));
}

/*------------------------------ END NODE METHODS ------------------------------*/


/*------------------------------ ARRAY METHODS ------------------------------*/

Array.prototype.addClass = function(x)
{
    for(let i = 0; i < this.length; i++)
        this[i].addClass(x); 
}

Array.prototype.removeClass = function(x)
{
    for(let i = 0; i < this.length; i++)
        this[i].removeClass(x);
}

Array.prototype.toggleClass = function(x)
{
    for(let i = 0; i < this.length; i++)
        this[i].toggleClass(x);
}

Array.prototype.switchClass = function(x, y)
{
    for(let i = 0; i < this.length; i++)
        this[i].switchClass(x, y);
}

Array.prototype.addEvent = function(x, y)
{
    for(let i = 0; i < this.length; i++)
        this[i].addEventListener(x, y);
}

Array.prototype.removeEvent = function(x, y)
{
    for(let i = 0; i < this.length; i++)
        this[i].removeEventListener(x, y);
}

Array.prototype.setValue = function(x)
{
    for(let i = 0; i < this.length; i++)
        this[i].setValue(x);
}

Array.prototype.getValue = function()
{
    let values = [];

    for(let i = 0; i < this.length; i++)
        values.push(this[i].getValue());

    return values;
}

Array.prototype.getIdValue = function()
{
    let values = [];

    for(let i = 0; i < this.length; i++)
        values.push(this[i].getIdValue());

    return values;
}

Array.prototype.getFile = function()
{
    let files = [];

    for(let i = 0; i < this.length; i++)
        if(this[i].files.length) files.push(this[i].getFile());

    return files;
}

Array.prototype.appendChild = function(x)
{
    for(let i = 0; i < this.length; i++)
        this[i].appendChild(x.cloneNode(true));
}

/*------------------------------ END ARRAY METHODS ------------------------------*/


/*------------------------------ STRING METHODS ------------------------------*/

String.prototype.ucWords = function()
{
    let words = this.split(' ');
    let uc = [];

    for(let i = 0; i < words.length; i++)
        uc.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));

    return uc.join(' ');
}

//Toma un string de fecha, y un formato de guia indicativo de como se compone. Si existe un newFormat indicado se formateara, sino, se retornara como Objeto Date.
String.prototype.format = function(format, newFormat = false)
{
    //Obj Fecha Base a partir del cual vamos a crear la nueva
    let date = new Date(0);

    //Obtenemos los digitos del string fecha y las wildcards del formato indicado
    let digits = this.split(/[^0-9]+/g);
    let wildCards = format.split(/[^a-zA-Z]+/g);

    for(let i = 0; i < wildCards.length; i++)
    {
        switch(wildCards[i].toLowerCase())
        {
            case 'd': date.setDate(digits[i]); break;
            case 'm': date.setMonth(digits[i] - 1); break;
            case 'y': date.setFullYear(digits[i]); break;
            case 'h': date.setHours(digits[i]); break;
            case 'i': date.setMinutes(digits[i]); break;
            case 's': date.setSeconds(digits[i]); break;
            case 'l': date.setMilliseconds(digits[i]); break;
            case 't': date.setTime(digits[i]); break;
            case 'u': date.setTime(Math.round(digits[i] * 1000)); break;
        }
    }

    return newFormat ? date.format(newFormat) : date; 
}

/*------------------------------ END STRING METHODS ------------------------------*/


/*------------------------------ DATE METHODS ------------------------------*/

Date.prototype.format =  function(format, force = false)
{
    //Format tiene que ser string. This tiene que ser Obj Date o se inicializara
    if(typeof format !== 'string') return false;
    let date = Object.prototype.toString.call(this) === "[object Date]" ? this : CURRENT_DATE;

    //Wilcards que vamos a utilizar con las funciones indicadas para obtener sus resultados
    const METHODS =
    {
        //Dia
        dd: () => ('00' + date.getDate()).slice(-2),
        d: () => date.getDate(),
        DD: () => date.toLocaleDateString(LOCAL_REGION, {weekday: 'long'}),
        D: () => date.toLocaleDateString(LOCAL_REGION, {weekday: 'short'}),

        //Mes
        mm: () => ('00' + (date.getMonth() + 1)).slice(-2),
        m: () => date.getMonth() + 1,
        MM: () => date.toLocaleDateString(LOCAL_REGION, {month: 'long'}).ucWords(),
        M: () => date.toLocaleDateString(LOCAL_REGION, {month: 'short'}).ucWords(),

        //Año
        yyyy: () => date.getFullYear(),
        yy: () => date.getFullYear().toString().substr(-2),

        //Hora
        hh: () => ('00' + date.getHours()).slice(-2),
        h: () => date.getHours(),
        HC: () => date.getHours() > 12 ? 'PM' : 'AM',
        hc: () => date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
        hhc: () => date.getHours() > 12 ? ('00' + (date.getHours() - 12)).slice(-2) : ('00' + (date.getHours())).slice(-2),
        
        //Minuto
        ii: () => date.getMinutes(),

        //Segundo
        ss: () => date.getSeconds(),

        //Milisegundo
        ll: () => date.getMilliseconds(),

        //Timestamp (Epoch / UNIX)
        t: () => date.getTime(),
        u: () => Math.round(date.getTime() / 1000),
    };

    if(!force)
    {
        let wildCards = format.split(/[^a-zA-Z]+/g);
        let separators = format.split(/[a-zA-Z]+/g);
        let result = [];

        for(let i = 0; i < wildCards.length; i++)
        {
            //Chequeamos si existe una key para esa wildcard
            if(METHODS[wildCards[i]])
            {
                //Si es una funcion la ejecutamos y en esa misma key pisamos con el resultado (En caso de que necesitemos esa misma wildcard mas adelante)
                if(typeof METHODS[wildCards[i]] === 'function')
                {
                    wildCards[i] = METHODS[wildCards[i]]().toString();
                    METHODS[wildCards[i]] = wildCards[i];
                }
                else
                    wildCards[i] = METHODS[wildCards[i]];
            }

            //Pusheamos a los resultados la concatenacion del valor y el separador de la posicion actual
            result.push(separators[i] !== '' ? separators[i] + wildCards[i] : wildCards[i]);
        }
        
        format = result.join('');
    }
    //Forzar ayuda en determinados casos donde el split de la primera mitad de la funcion no puede acceder
    //Ej: Palabras pegadas a las wildcards o multiples wildcards concatenadas
    else
    {
        let wildCardKeys = Object.keys(METHODS);
        let wildCardValues = Object.values(METHODS);

        //Por cada wildCard sumamos el '%' y lo reemplazamos por su contenido
        for(let i = 0; i < wildCardKeys.length; i++)
            format = format.replaceAll('%' + wildCardKeys[i], wildCardValues[i]);
    }

    return format;
}

/*------------------------------ END DATE METHODS ------------------------------*/


/*------------------------------ SELECTORS ------------------------------*/

//Log rapido
export const $log = x => console.log(x);

//Selecciona un elemento indicado. Su mejor uso va para IDs
export const $elem = x => document.querySelector(x);

//Selecciona un conjunto de elementos que matcheen con el criterio y los devuelve en forma de Array
export const $array = x => Array.from(document.querySelectorAll(x));

//Cuenta las instancias de un elemento (Atajo para .length sobre arrays)
export const $count = x => Array.from(document.querySelectorAll(x)).length;

//Crea un elemento HTML
export const $create = x => document.createElement(x);

/*------------------------------ END SELECTORS ------------------------------*/
