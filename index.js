//realizamos los import de los componentes
import checkIcon from "./components/completeTask.js";
import deleteIcon from "./components/deleteTask.js";

//encapsulamos la lógica
(()=>{
    //traemos el botón a traves de su data set
const button=document.querySelector("[data-input-button]")

//creamos un arrow function para crear los task
const createTask =(evento)=>{
evento.preventDefault();
//traemos el input 
const input=document.querySelector("[data-input-form]");
//extraemos el valor que está en el input
const value=input.value;
//traemos el contenedor de la lista de tareas (ul)
const listContainer=document.querySelector("[data-list-container]");
//creamos el div contenedor
const div=document.createElement("div");
div.classList.add("task-container")

//creamos elemento li para agregarlo al contenedor de la lista
const li=document.createElement("li");
li.classList.add("new-task-list__li")
//limpiamos el campo del input despues de obtener el valor
input.value="";
//creamos un div para pode tener la lista y las imagenes necesarias
li.innerText=value;


//creamos la imagen del borrar
const trash=document.createElement("span");
trash.classList.add("delete-icon-img");

//agregamos un oyente a la imagen del delete
trash.addEventListener("click",deleteIcon);
//añadimos los elementos al div
div.appendChild(checkIcon());
div.appendChild(li);
div.appendChild(trash);
listContainer.appendChild(div)


}
//creamos un oyente para el botón
button.addEventListener("click",createTask);


})();