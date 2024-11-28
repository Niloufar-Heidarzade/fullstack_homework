import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/data/sample-data.json";
const tasksData= data.tasks;

const taskListSlice = createSlice({
  name:"taskList",
  initialState: {
    allTasks: tasksData,
    selectedTaskId: null
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
    }
  }
})

export const { addTask , removeTask , setSelectedTaskId} = taskListSlice.actions;
export default taskListSlice.reducer;