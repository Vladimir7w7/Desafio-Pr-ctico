import React from 'react'
const Todo = ({todo,index,deleteTodo,number}) => {
return (
<>
    <div className="list">
        <h3>{number}  {todo}</h3> <button 
        className="btn-delete" onClick={() => 
        deleteTodo(index)}>x</button>
    </div>
</>
)
}
export default Todo
