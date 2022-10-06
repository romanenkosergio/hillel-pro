import './Todo.css'
import Task from '../Task/Task'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import {addTask, selectTasks, loadTasks} from '../../store/slices/tasks'


const Todo = () => {
  const tasks = useSelector(selectTasks)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(r => r.json())
      .then(data => dispatch(loadTasks(data)))
  }, [])

  const [input, setInput] = useState('')

  const renderedTasks = tasks.map(task => <Task task={task} key={task.id}/>)
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      dispatch(addTask(e.target.value))
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
