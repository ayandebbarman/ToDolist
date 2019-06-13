import React from 'react'
import logo from './logo.svg'
import './App.css'
import ToDoItem from './ToDoItem'
import todolistitems from './ToDoData'

class App extends React.Component {
  constructor(){
    super()
  this.state = {
    todos: todolistitems
    }
}
  render() {
    const todoitems = this.state.todos.map(item => 
    <ToDoItem key = {item.id} item = {item.item} completed ={item.completed}/>)
    console.log(todoitems)
    return (
      <div className = "todo-list">
        {todoitems}
      </div>
    )

  }

}

export default App;
