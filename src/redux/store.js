import { configureStore } from "@reduxjs/toolkit";
import directoryReducer from "./directoriesSlice";
import sidebarReducer from "./sidebarSlice";
import addTaskFormReducer from "./addTaskFormSlice";

const store = configureStore({
  reducer: {
    directory: directoryReducer,
    sidebar: sidebarReducer,
    addTaskForm : addTaskFormReducer
  },
})

export default store;
