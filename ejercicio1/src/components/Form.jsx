import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [nombres, setNombres] = useState({})
    const [apellidos, setApellidos] = useState({})
    const [sexo, setSexo] = useState({})
    const [dui, setDui] = useState({})
    const [fecha, setFecha] = useState({})
    const [nacionalidad, setNacionalidad] = useState({})
    const [direccion, setDireccion] = useState({})
    const [municipio, setMunicipio] = useState({})
    const [departamento, setDepartamento] = useState({})
    const [todo, setTodo] = useState({})
    const [todos,setTodos] = useState ([])
//const handleChange1 = e => setNumber
//({[e.target.name]: e.target.value})
const handleChange0 = e => setNombres
({[e.target.name]: e.target.value})
const handleChange1 = e => setApellidos
({[e.target.name]: e.target.value})
const handleChange2 = e => setSexo
({[e.target.name]: e.target.value})
const handleChange3 = e => setDui
({[e.target.name]: e.target.value})
const handleChange4 = e => setFecha
({[e.target.name]: e.target.value})
const handleChange5 = e => setNacionalidad
({[e.target.name]: e.target.value})
const handleChange6 = e => setDireccion
({[e.target.name]: e.target.value})
const handleChange7 = e => setMunicipio
({[e.target.name]: e.target.value})
const handleChange8 = e => setDepartamento
({[e.target.name]: e.target.value})
const handleClick = e => {
    //if(Object.keys(todo).length === 0 || todo.todo.trim() ==='' || Object.keys(number).length === 0 || number.number.trim() ==='') 
    if(Object.keys(nombres).length === 0 || nombres.nombres.trim() ===''||Object.keys(apellidos).length === 0 || apellidos.apellidos.trim() ===''
    ||Object.keys(sexo).length === 0 || sexo.sexo.trim() ===''||Object.keys(dui).length === 0 || dui.dui.trim() ===''||Object.keys(direccion).length === 0 || direccion.direccion.trim() ===''
    ||Object.keys(municipio).length === 0 || municipio.municipio.trim() ===''||Object.keys(departamento).length === 0 || departamento.departamento.trim() ===''
    ||Object.keys(fecha).length === 0 || fecha.fecha.trim() ==='')
    {alert ('el campo no puede estar vacio')
    return
}
    setTodos([...todos, todo,nombres,apellidos,sexo,dui,fecha,nacionalidad,direccion,municipio,departamento])
}
//Validacion de letras
//--------------------------------------------------------------------
/*function SoloLetras(e)
{
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZÁÉÍÓÚabcdefghijklmnopqrstuvwxyzáéíóú";

especiales = [8,13];
tecla_especial = false
for(var i in especiales) {
if(key == especiales[i]){
 tecla_especial = true;
 break;
}
}

if(letras.indexOf(tecla) == -1 && !tecla_especial)
{
 alert("Ingresar solo letras");
 return false;
}
}*/
//----------------------------------------------------------------------
const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)
}
return (
    <>
    <form onSubmit = { e => e.preventDefault()}>
        <label>Nombres:</label><br/>
        <input type="text" name="nombres" 
        onChange= {handleChange0}/><br/>
        <label>Apellidos:</label><br/>
        <input type="text" name="apellidos" 
        onChange= {handleChange1}/><br/>
        <label>Sexo:</label><br/>
        <input type="text" name="sexo" 
        onChange= {handleChange2}/><br/>
        <label>DUI:</label><br/>
        <input type="number" name="dui" 
        onChange= {handleChange3}/><br/>
         <label>Fecha de nacimiento:</label><br/>
        <input type="date" name="fecha" 
        onChange= {handleChange4}/><br/>
        <label>Nacionalidad:</label><br/>
        <input type="text" name="nacionalidad" 
        onChange= {handleChange5}/><br/>
        <label>Dirección:</label><br/>
        <input type="text" name="direccion" 
        onChange= {handleChange6}/><br/>
        <label>Municipio:</label><br/>
        <input type="text" name="municipio" 
        onChange= {handleChange7}/><br/>
        <label>Departamento:</label><br/>
        <input type="text" name="departamento" 
        onChange= {handleChange8}/><br/>
        <button onClick={handleClick}>Registrar</button>
    </form>
    {
        todos.map((value, index) =>
         (<Todo todo={value.todo} key={index} index={index}
          deleteTodo={deleteTodo} nombres={value.nombres} apellidos={value.apellidos} sexo={value.sexo} dui={value.dui} fecha={value.fecha} nacionalidad={value.nacionalidad}
          direccion={value.direccion} municipio={value.municipio} departamento={value.departamento}
         />))
    }
</>
)
}
export default Form
