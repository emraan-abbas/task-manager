import './App.css';
import TaskForm from './components/TaskForm';

function App() {

  const addTask = (task) => {
    console.log('Task Data = ', task)
  }

  return (
    <TaskForm addTask={addTask} />
  );
}

export default App;
