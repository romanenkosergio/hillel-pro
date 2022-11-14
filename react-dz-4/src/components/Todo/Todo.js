import './Todo.css'
import Task from '../Task/Task'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import {useGetTasksQuery} from '../../store/api/tasksApi'
import {addTask, selectTasks} from '../../store/slices/tasks'


const Todo = () => {
  useGetTasksQuery()

  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const renderedTasks = tasks.map(task => <Task task={task} key={task.id}/>)
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      dispatch(addTask(input))
      setInput('')
    }
  }
  return <div>
    <h1 className="header">Todos</h1>
    <input className="todo-input" placeholder="Add todo" onKeyPress={onKeyPress}
           onChange={e => setInput(e.target.value)} value={input}/>
    <ul>
      {renderedTasks}
    </ul>
  </div>
}


export default Todo
