import React from 'react'
import Todo from './Todo'
import { useSelector,useDispatch } from 'react-redux'
import {addTodo,deleteTodo,isComplete} from "../Redux/Action/index"

export default function App() {
  let myState=useSelector((state)=>state.handleTodo)
  const dispatch = useDispatch()
  console.log(myState);
  return (
    <div>
        <h1>TODO APP</h1>
<form onSubmit={(event)=>{
  event.preventDefault()
  let todo = {todo:event.target.todo.value,isComplete:false}
  dispatch(addTodo(todo))
  event.target.todo.value=""
}}>
      <input placeholder='TODO' name='todo'/>
      <input type="submit"  />
      </form>
      {
      myState.map((todo,i)=>
      <Todo index={i} key={todo.todo} {...todo}/>)
}
    </div> 
  )
}
