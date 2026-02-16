import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';

function App() {

  const [task, setTask] = useState([])

  const addTask = (task) => {
    setTask(prev => [...prev, task]);
  }

  return (
    <div>
      <TaskForm addTask={addTask} />

      <div className='container'>
        <h3>Tasks:</h3>
        {task.map(task => (
          <div key={task.id} className='card p-2 mb-2'>
            <h5>{task.title}</h5>
            <h5>{task.description}</h5>
            <h5>Priority: {task.priority}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
