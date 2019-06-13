import React,{Component} from 'react'

function ToDoItem(props){

return(
    <div className="todo-item">
        <input type="checkbox" checked={props.completed}/>
        <p>{props.item}</p>
    </div>
)
}


export default ToDoItem;
