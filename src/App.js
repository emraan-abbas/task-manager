import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : [];
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task))
  }, [task])

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
