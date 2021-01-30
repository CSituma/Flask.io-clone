import React from 'react'
import {useSelector}from "react-redux"

const Todoitem = ()  =>{

const todos = useSelector(state =>state.todos)
if(!todos|| !todos.length){

  return ""
}

  return (
    <div>
      <ul> {todos.map(todo => <li>{todo}</li>)}</ul>
    </div>
  )
}

export default Todoitem
