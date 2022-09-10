import React from 'react'
const Todo = ({todo,index,deleteTodo,nombres,apellidos,sexo,dui,fecha,nacionalidad,direccion,municipio,departamento}) => {
return (
<>
    <div className="list">
        <h3> {nombres}</h3>
        <h3> {apellidos}</h3>
        <h3> {sexo}</h3>
        <h3> {dui}</h3>
        <h3> {fecha}</h3>
        <h3> {nacionalidad}</h3>
        <h3> {direccion}</h3>
        <h3> {municipio}</h3>
        <h3> {departamento}</h3>
        </div>
     
    
</>
)
}
export default Todo
