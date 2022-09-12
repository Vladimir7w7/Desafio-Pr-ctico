import React, {useState} from 'react';
import Todo from '../components/Todo';
import Todo1 from '../components/Todo1';
import Todo2 from '../components/Todo2';
//--------------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------------------------
const Form = () => {
    const [onzas, setOnzas] = useState({})
    const [kilogramos, setKilogramos] = useState({})
    const [gramos, setGramos] = useState({})
    const [todos,setTodos] = useState ([])
    const [todos2,setTodos2] = useState ([])
    const [todos3,setTodos3] = useState ([])

const handleChange0 = e => setOnzas
({[e.target.name]: e.target.value})
const handleChange1 = e => setKilogramos
({[e.target.name]: e.target.value})
const handleChange2 = e => setGramos
({[e.target.name]: e.target.value})


const handleClick0 = e =>{
    if(Object.keys(onzas).length === 0 || onzas.onzas.trim() ==='')
    {alert ('el campo no puede estar vacio')
    return
}
   setTodos([ onzas])
}

const handleClick1 = e => {
if(Object.keys(kilogramos).length === 0 || kilogramos.kilogramos.trim() ==='')
{alert ('el campo no puede estar vacio')
return
}
setTodos2([kilogramos])
}
const handleClick2 = e => {
    if(Object.keys(gramos).length === 0 || gramos.gramos.trim() ==='')
    {alert ('el campo no puede estar vacio')
    return
}
   setTodos3([gramos])
}

return (
    <>
    <form onSubmit = { e => e.preventDefault()}>
        <label>Libras a Onzas:</label><br/>
        
        <input type="number" name="onzas" placeholder="Inserte el valor en Libras" 
        onChange= {handleChange0}/><br/>
        <button onClick={handleClick0}>Convertir</button>
    {
        todos.map((value, index) =>
         (<Todo todo={value.todo} key={index} index={index}
          onzas={value.onzas}
         />))
    }
        <label></label><br/>
        <label>Libras a Kilogramos:</label><br/>
        <input type="number" name="kilogramos" placeholder="Inserte el valor en Libras"
        onChange= {handleChange1}/><br/>
        <button onClick={handleClick1}>Convertir</button>
            {
        todos2.map((value, index) =>
         (<Todo1 todo={value.todo} key={index} index={index}
          kilogramos={value.kilogramos}
         />))
    }
        <label></label><br/>
        <label>Libras a Gramos:</label><br/>
        <input type="number" name="gramos" placeholder="Inserte el valor en Libras"
        onChange= {handleChange2}/><br/>
        <button onClick={handleClick2}>Convertir</button>
        </form>
        {
        todos3.map((value, index) =>
         (<Todo2 todo={value.todo} key={index} index={index}
          gramos={value.gramos}
         />))
    }
    
    
</>
)
}
export default Form
