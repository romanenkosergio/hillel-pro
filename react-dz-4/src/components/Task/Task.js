import './Task.css'
import React from "react"
import {useDispatch} from 'react-redux'
import {removeTask, selectTask} from "../../store/slices/tasks"

const Task = ({task}) => {
  const dispatch = useDispatch()

  return (
    <li className="list">
      <input type="checkbox" name={task.id} checked={task.completed} onChange={() => dispatch(selectTask(task))}/>
      <label style={task.completed ? {textDecoration: 'line-through'} : {}} htmlFor={task.id}>{task.title}</label>
      <i className="bi bi-trash3-fill" onClick={() => dispatch(removeTask(task))}></i>
    </li>
  )
}

export default Task