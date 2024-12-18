import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/sample-data.json";
const tasksData= data.tasks;

const taskListSlice = createSlice({
  name:"taskList",
  initialState: {
    allTasks: tasksData,
    selectedTaskId: null,
    query: "",
  },
  reducers: {
    addTask: (state, action) => {
      state.allTasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.allTasks = state.allTasks.filter(task => task._id !== action.payload);
    },
    setSelectedTaskId: (state , action) => {
      state.selectedTaskId = action.payload;
    },
    toggleTaskImportant: (state, action) => {
      const task = state.allTasks.find((task) => task._id === action.payload);
      if (task) {
        task.important = !task.important;
      }
    },
    toggleTaskCompleted: (state , action) => {
      const task = state.allTasks.find((task) => task._id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state , action) => {
      const index = state.allTasks.findIndex((task) => task._id === action.payload._id);
      if (index !== -1) {
        state.allTasks[index] = { ...state.allTasks[index], ...action.payload };
      }
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload.toLowerCase();
    },
  }
})

export const { addTask , removeTask , setSelectedTaskId , toggleTaskImportant , toggleTaskCompleted , editTask , setSearchQuery}= taskListSlice.actions;
export default taskListSlice.reducer;