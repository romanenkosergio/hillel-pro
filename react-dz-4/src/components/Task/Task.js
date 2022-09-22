import './Task.css'
import { useContext } from "react"
import TaskContext from '../providers/TaskContext'

const Task = ({task}) => {
  const {tasks, setTasks} = useContext(TaskContext)

  const removeTask = () => {
    if (task.isChecked) {
      setTasks(tasks.filter(currentTask => currentTask.id !== task.id))
    }
 }

 return (
   <li className="list">
      <input type="checkbox" name={task.id} value={task.isChecked} onChange={e => {
        setTasks(tasks.map(currentTask => {
          if(task.id === currentTask.id) {
            currentTask.isChecked = !task.isChecked
          }
          return task
        }))
      }}/> 
      <label style={task.isChecked ? {textDecoration: 'line-through'} : {}} htmlFor={task.id}>{task.title}</label>
      <i className="bi bi-trash3-fill" onClick={removeTask}></i>
   </li>
 )
}

export default Task