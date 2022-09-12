import React, {useState,Component} from 'react';

//--------------------------------------------------------------------------------------------------------------



//--------------------------------------------------------------------------------------------------------------

const Form = () => {

  const [todos,setTodos] = useState ([])



const handleClick0 = e =>{
    window.open("localhost:3001/Nuevo Desafio DPS/ejercicio1/src/App.js") 
}

const handleClick1 = e => {

}




const deleteTodo = indice => {
    const newTodos = [...todos]
    newTodos.splice(indice,1)
    setTodos(newTodos)
}
return (
    <>
    <form onSubmit = { e => e.preventDefault()}>
      
    <button onclick="location.href='https://www.facebook.com'">Llévame a otro lado</button>

        <button onClick={handleClick0}>Ejercicio 1</button>
    {
     // window.open("http://www.ejemplo.com.ar/", "_self") 
    }
        
        <button onClick={handleClick1}>Ejercicio 2</button>
            {
     
    }
        
        </form>
        
    
        


    
</>
)}

export default Form
