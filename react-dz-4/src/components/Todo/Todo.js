import './Todo.css'
import Task from '../Task/Task'
import { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TaskContext from '../providers/TaskContext';

const Todo = () => {
    const {tasks, setTasks} = useContext(TaskContext)
    const [input, setInput] = useState('')

    const renderedTasks = tasks.map(task => <Task task={task} key={task.id}/>)
    const onKeyPress = e => {
        if (e.key === 'Enter') {
            setTasks(oldArray => [...oldArray, {title: e.target.value, id: uuidv4(), isChecked: false}])
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

//<MyContext.Todo value=({tasks, setTasks})>
//{children}
//</MyContext.Todo>