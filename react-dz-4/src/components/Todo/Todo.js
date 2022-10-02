import './Todo.css'
import Task from '../Task/Task'
import { useState, useContext } from 'react'
import TaskContext from '../providers/TaskContext';

const Todo = () => {
    const {tasks, addTask} = useContext(TaskContext)
    const [input, setInput] = useState('')

    const renderedTasks = tasks.map(task => <Task task={task} key={task.id}/>)
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            addTask(e.target.value)
            setInput('')
        }
    }

    return <div>
        <h1 className='header'>Todos</h1>
        <input className="todo-input" placeholder='Add todo' onKeyPress={onKeyPress} onChange={e => setInput(e.target.value)} value={input}/>
       <ul>
       {renderedTasks}
       </ul>
    </div>
}


export default Todo
