import { configureStore } from "@reduxjs/toolkit";
import directoryReducer from "./directoriesSlice";
import sidebarReducer from "./sidebarSlice";
import addTaskFormReducer from "./addTaskFormSlice";
import taskListReducer from "./taskListSlice";

const store = configureStore({
  reducer: {
    directory: directoryReducer,
    sidebar: sidebarReducer,
    addTaskForm : addTaskFormReducer,
    taskList: taskListReducer
  },
})

export default store;
