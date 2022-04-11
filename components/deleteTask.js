
//creamos función para borrar tasks 
const deleteIcon=(evento)=>{
    const ejecution=confirm("¿Desea borrar la selección?")
    if(ejecution){
    const parentDiv=evento.target.parentElement;
    parentDiv.remove();
    }
}
export default deleteIcon;