import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [task, setTask] = useState([])

  const addTask = (task) => {
    setTask(prev => [...prev, task]);
  }

  const onDelete = (id) => {
    setTask(prev => prev.filter(task => task.id !== id));
  }

  return (
    <div>
      <TaskForm addTask={addTask} />

      <TaskList tasks={task} onDelete={onDelete} />
    </div>
  );
}

export default App;
