import { useState } from "react"
import TaskContext from "./TaskContext"
import {v4 as uuidv4} from "uuid";

const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([])

  const removeTask = task => {
    if (task.isChecked) {
      setTasks(tasks.filter(currentTask => currentTask.id !== task.id))
    }
  }
  const addTask = title => {
    setTasks(oldArray => [...oldArray, {title, id: uuidv4(), isChecked: false}])
  }
  const selectTask = task => {
    setTasks(tasks.map(currentTask => {
      if(task.id === currentTask.id) {
        currentTask.isChecked = !task.isChecked
      }
      return currentTask
    }))
  }

  return <TaskContext.Provider value={{tasks, setTasks, removeTask, selectTask, addTask}}>
      {children}
  </TaskContext.Provider>
}

export default TaskProvider