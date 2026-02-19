import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, toggleTaskStatus, updateTask } from './features/tasks/tasksSlice';

function App() {

  // const [task, setTask] = useState(() => {
  //   const savedTasks = localStorage.getItem('tasks')
  //   return savedTasks ? JSON.parse(savedTasks) : [];
  // })

  // useEffect(() => {
  //   localStorage.setItem('tasks', JSON.stringify(task))
  // }, [task])

  const tasks = useSelector(state => state.tasks.tasks)
  const dispatch = useDispatch();

  return (
    <div>
      <TaskForm addTask={(task) => dispatch(addTask(task))} />

      <TaskList tasks={tasks} onDelete={(id) => dispatch(deleteTask (id))} onToggle={(id) => dispatch(toggleTaskStatus(id))} onUpdate={(task) => dispatch(updateTask(task))} />
    </div>
  );
}

export default App;
