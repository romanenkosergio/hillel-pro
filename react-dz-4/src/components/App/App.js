import './App.css';
import Todo from '../Todo/Todo'
import TaskProvider from '../providers/TaskProvider';

function App() {
  return (
    <div className='App'>
      <TaskProvider>
        <Todo/>
      </TaskProvider>
    </div>

  );
}

export default App;
