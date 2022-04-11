const checkIcon=()=>{
    //creamos la imagen del check
const icon=document.createElement("span");
icon.classList.add("check-icon-img");
icon.addEventListener("click",completeTask)
    
return icon
  
}
//creamos función para cambiar el icono del check
const completeTask=(evento)=>{
    const elemento=evento.target;
    elemento.classList.toggle("check-icon-img")
    elemento.classList.toggle("cheched-icon-img")
}

export default checkIcon;