import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {addTodo,deleteTodo,isComplete} from "../Redux/Action/index"

export default function Todo(props) {
  const dispatch = useDispatch()
  return (
    <div>
      <input checked={props.isComplete} type="checkbox" onClick={()=>dispatch(isComplete(props.index))} />
      <h2 style={props.isComplete?{ textDecoration: "line-through"}:{}}>{props.todo}</h2>
      <button onClick={()=>dispatch(deleteTodo(props.index))}>✖️</button>
    </div>
  )
}
