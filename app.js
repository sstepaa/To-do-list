//Captura y funcion de reloj header
//captura de elemetos
const fecha = new Date();

const diaHtml = document.querySelector('.dia');
const diaNumbers = document.querySelector('.diaNumber');
const mesHtml = document.querySelector('.mes');
const contentDate = document.querySelector('.date');

//funciones
let diaNumero = setInterval(() =>{
    const dias = ["domingo" , "lunes" , "martes" , "miercoles" , "jueves" , "viernes" , "sabado"];
    const meses = ["enero" , "febrero" , "marzo" , "abril" , "mayo" , "junio" , "julio" , "agosto" , "septiembre" , "octubre" , "noviembre" , "diciembre"];

    
    let diaN = fecha.getDay();
    let diaString = dias[fecha.getDay()];
    let mes = meses[fecha.getMonth()];


    contentDate.textContent = `${diaString} , ${diaN} de ${mes}`;
} , 1000) ;



//CAPTURA DE ELEMENTOS HTML
const inputHtml = document.querySelector('.form-input');
const btnAdd = document.querySelector('.btn-form');
const btnDelete = document.querySelector('.btn-delete');
const todoUl = document.querySelector('.todo-list');
const clearHtml = document.querySelector('.clear');
const empty = document.querySelector('.empty');

//Escucha de eventos 
btnAdd.addEventListener('click' , addTodo);
btnDelete.addEventListener('click' , deleteTodo);
clearHtml.addEventListener('click' , removeClear);



//Funciones encargadas de eventos
function addTodo(event){
    event.preventDefault();//Metodo del objeto event , para sacarle los evento que tiene por defecto.
    
    //creacion de elementos
    const liHtml = document.createElement('li');
    const textoLi = document.createTextNode(inputHtml.value);

    //insercion de elementos
    todoUl.appendChild(liHtml);
    liHtml.appendChild(textoLi);


    

    //para borrar lo escrito en el input 
    inputHtml.value = '';

    empty.style.display = 'none';
};



function deleteTodo(event){
    event.preventDefault();
    
    const list = document.querySelector('#list');
    const item = todoUl.lastElementChild;
    list.removeChild(item);

    const items = document.querySelectorAll('li');
    if (items.length === 0){
        empty.style.display = 'flex';
    }
};

function removeClear(event){
    event.preventDefault();

    const list = document.querySelector('#list');
    list.remove();
}
















