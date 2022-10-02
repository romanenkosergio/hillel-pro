import './Task.css'
import { useContext } from "react"
import TaskContext from '../providers/TaskContext'

const Task = ({task}) => {
  const {removeTask, selectTask} = useContext(TaskContext)

 return (
   <li className="list">
      <input type="checkbox" name={task.id} value={task.isChecked} onChange={() => selectTask(task)}/>
      <label style={task.isChecked ? {textDecoration: 'line-through'} : {}} htmlFor={task.id}>{task.title}</label>
      <i className="bi bi-trash3-fill" onClick={() => removeTask(task)}></i>
   </li>
 )
}

export default Task