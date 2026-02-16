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

  const toggleTaskStatus = (id) => {
    setTask(prev =>
      prev.map(task =>
        task.id === id
          ? {
            ...task,
            status: task.status === 'todo' ? 'completed' : 'todo'
          }
          : task
      )
    );
  };

  const updateTask = (updatedTask) => {
    setTask(prev => 
      prev.map(task => 
        task.id === updatedTask.id ? updatedTask : task
      )
    )
  }

  return (
    <div>
      <TaskForm addTask={addTask} />

      <TaskList tasks={task} onDelete={onDelete} onToggle={toggleTaskStatus} onUpdate={updateTask} />
    </div>
  );
}

export default App;
