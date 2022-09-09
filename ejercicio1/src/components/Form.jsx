import React, {useState} from 'react';
import Todo from '../components/Todo';

const Form = () => {
    const [number, setNumber] = useState({})
    const [todo, setTodo] = useState({})
    const [todos,setTodos] = useState ([])
const handleChange1 = e => setNumber
({[e.target.name]: e.target.value})
const handleChange = e => setTodo
({[e.target.name]: e.target.value})
const handleClick = e => {
    if(Object.keys(todo).length === 0 || todo.todo.trim() ==='' || Object.keys(number).length === 0 || number.number.trim() ==='') 
    {alert ('el campo no puede estar vacio')
    return
}
    setTodos([...todos, number, todo])
}

const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)
}
return (
    <>
    <form onSubmit = { e => e.preventDefault()}>
        <label>Nombres:</label><br/>
        <input type="text" name="number" 
        onChange= {handleChange1}/><br/>
        <label>Apellidos:</label><br/>
        <input type="text" name="todo" 
        onChange= {handleChange}/><br/>
        <label>Sexo:</label><br/>
        <input type="text" name="number" 
        onChange= {handleChange1}/><br/>
        <label>DUI:</label><br/>
        <input type="text" name="number" 
        onChange= {handleChange1}/><br/>
        <label>Fecha de nacimiento:</label><br/>
        <input type="date" name="number" 
        onChange= {handleChange1}/><br/>
        <label>Nacionalidad:</label><br/>
        <input type="text" name="number" 
        onChange= {handleChange1}/><br/>
        <label>Dirección:</label><br/>
        <input type="text" name="number" 
        onChange= {handleChange1}/><br/>
        <label>Municipio:</label><br/>
        <input type="text" name="number" 
        onChange= {handleChange1}/><br/>
        <label>Departamento:</label><br/>
        <input type="text" name="number" 
        onChange= {handleChange1}/><br/>
        <button onClick={handleClick}>agregar</button>
    </form>
    {
        todos.map((value, index) =>
         (<Todo todo={value.todo} key={index} index={index}
            deleteTodo={deleteTodo} number={value.number}
         />))
    }
</>
)
}
export default Form
