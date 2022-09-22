import { useState } from "react"
import TaskContext from "./TaskContext"

const TaskProvider = ({children}) => {
  const [tasks, setTasks] = useState([])

  return <TaskContext.Provider value={{tasks, setTasks}}>
      {children}
  </TaskContext.Provider>
}

export default TaskProvider