import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [task, setTask] = useState([])

  const addTask = (task) => {
    setTask(prev => [...prev, task]);
  }

  return (
    <div>
      <TaskForm addTask={addTask} />

      <TaskList tasks={task} />
    </div>
  );
}

export default App;
