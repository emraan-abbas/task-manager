import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers:{
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        task => task.id !== action.payload
      );
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    toggleTaskStatus: (state, action) => {
      state.tasks = state.tasks.map(task =>
        task.id === action.payload
          ? {
            ...task,
            status:
              task.status === 'todo'
                ? 'completed'
                : 'todo'
          }
          : task
      );
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },

    updateTask: (state, action) => {
      state.tasks = state.tasks.map(task =>
        task.id === action.payload.id
          ? action.payload
          : task
      );
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  }
});

export const {
  addTask,
  deleteTask,
  toggleTaskStatus,
  updateTask
} = tasksSlice.actions;

export default tasksSlice.reducer;