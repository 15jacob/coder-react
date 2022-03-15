/*------------------------------ NODE METHODS ------------------------------*/

//Agrega la o las clases indicadas al elemento HTML indicado
const nodeAddClass = function(x)
{
    if(x === null) return false;
    x = x.split(' ');

    //Iteramos todas las clases indicadas y las colocamos al elemento llamado
    for(let i = 0; i < x.length; i++)
        this.classList.add(x[i]);
}

//Quita la o las clases indicadas al elemento HTML indicado
const nodeRemoveClass = function(x)
{
    if(x === null) return false;
    x = x.split(' ');

    //Iteramos todas las clases indicadas y las colocamos al elemento llamado
    for(let i = 0; i < x.length; i++)
        this.classList.remove(x[i]);
}

//Switchea entre clases agregadas o no al elemento HTML indicado
const nodeToggleClass = function(x)
{
    if(x === null) return false;
    x = x.split(' ');

    for(let i = 0; i < x.length; i++)
        this.classList.toggle(x[i]);
}

//Chequea si un elemento contiene una clase indicada
const nodeHasClass = function(x)
{
    if(this.classList.contains(x))
        return true;

    return false;
}

//Setea values de Inputs, Textarea y Ultraselect. Puede recibir un array con multiples valores 
/* const nodeSetValue = function(x)
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
/* const nodeGetValue = function()
{
    if(this.parentNode.classList.contains('ultra-select'))
        return UltraSelect_Get_Value(this);
    else
        return this.value;
} */

//Obtiene los id y values seleccionados dentro de un Input, Textarea o Ultraselect. Devolviendolos como json
/* const nodeGetIdValue = function()
{
    if(this.parentNode.classList.contains('ultra-select'))
        return {id: this.id, value: UltraSelect_Get_Value(this)}
    else
        return {id: this.id, value: this.value}
} */

//Obtiene el archivo seleccionado dentro de un Input de tipo file. De no existir, devuelve nulo
const nodeGetFile = function()
{
    return this.files.length ? {name: this.id, file: this.files[0]} : null;
}

//Encuentra elementos indicados dentro del elemento que se llame. Devuelve un array con los mismos
const nodeFind = function(x)
{
    return Array.from(this.querySelectorAll(x));
}

const nodeTriggerEvent = function(e)
{
    this.dispatchEvent(new Event(e));
}

Node.prototype.addClass = nodeAddClass;
Node.prototype.removeClass = nodeRemoveClass;
Node.prototype.toggleClass = nodeToggleClass;
Node.prototype.hasClass = nodeHasClass;
//Node.prototype.setValue = nodeSetValue;
//Node.prototype.getValue = nodeGetValue;
//Node.prototype.getIdValue = nodeGetIdValue;
Node.prototype.getFile = nodeGetFile;
Node.prototype.find = nodeFind;
Node.prototype.triggerEvent = nodeTriggerEvent;

/*------------------------------ END NODE METHODS ------------------------------*/


/*------------------------------ ARRAY METHODS ------------------------------*/

//Agrega la o las clases indicadas a los elementos HTML indicados
const arrayAddClass = function(x)
{
    //Iteramos unicamente el array. El procesado se lo derivamos al metodo para nodos
    for(let i = 0; i < this.length; i++)
        this[i].addClass(x); 
}

//Quita la o las clases indicadas de los elementos HTML indicados
const arrayRemoveClass = function(x)
{
    //Iteramos unicamente el array. El procesado se lo derivamos al metodo para nodos
    for(let i = 0; i < this.length; i++)
        this[i].removeClass(x);
}

//Switchea entre clases agregadas o no a los elementos HTML indicados
const arrayToggleClass = function(x)
{
    //Iteramos unicamente el array. El procesado se lo derivamos al metodo para nodos
    for(let i = 0; i < this.length; i++)
        this[i].toggleClass(x);
}

//Agrega un evento a todos los elementos HTML indicados
const arrayAddEvent = function(x, y)
{
    for(let i = 0; i < this.length; i++)
        this[i].addEventListener(x, y);
}

//Quita un evento a todos los elementos HTML indicados
const arrayRemoveEvent = function(x, y)
{
    for(let i = 0; i < this.length; i++)
        this[i].removeEventListener(x, y);
}

const arraySetValue = function(x)
{
    for(let i = 0; i < this.length; i++)
        this[i].setValue(x);
}

const arrayGetValue = function()
{
    let values = [];

    for(let i = 0; i < this.length; i++)
        values.push(this[i].getValue());

    return values;
}

const arrayGetIdValue = function()
{
    let values = [];

    for(let i = 0; i < this.length; i++)
        values.push(this[i].getIdValue());

    return values;
}

const arrayGetFile = function()
{
    let files = [];

    for(let i = 0; i < this.length; i++)
        if(this[i].files.length) files.push(this[i].getFile());

    return files;
}

const arrayTriggerEvent = function(e)
{
    for(let i = 0; i < this.length; i++)
        this[i].dispatchEvent(new Event(e));
}

Array.prototype.addClass = arrayAddClass;
Array.prototype.removeClass = arrayRemoveClass;
Array.prototype.toggleClass = arrayToggleClass;
Array.prototype.addEvent = arrayAddEvent;
Array.prototype.removeEvent = arrayRemoveEvent;
Array.prototype.setValue = arraySetValue;
Array.prototype.getValue = arrayGetValue;
Array.prototype.getIdValue = arrayGetIdValue;
Array.prototype.getFile = arrayGetFile;
Array.prototype.triggerEvent = arrayTriggerEvent;

/*------------------------------ END ARRAY METHODS ------------------------------*/


/*------------------------------ SELECTORS ------------------------------*/

//Log rapido
const $log = x => console.log(x);

//Selecciona un elemento indicado. Su mejor uso va para IDs
const $elem = x => document.querySelector(x);

//Selecciona un conjunto de elementos que matcheen con el criterio y los devuelve en forma de Array
const $array = x => Array.from(document.querySelectorAll(x));

//Cuenta las instancias de un elemento (Atajo para .length sobre arrays)
const $count = x => Array.from(document.querySelectorAll(x)).length;

//Crea un elemento HTML
const $create = x => document.createElement(x);

/*------------------------------ END SELECTORS ------------------------------*/
