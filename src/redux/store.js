import { configureStore } from "@reduxjs/toolkit";
import directoryReducer from "./directoriesSlice";
import sidebarReducer from "./sidebarSlice";

const store = configureStore({
  reducer: {
    directory: directoryReducer,
    sidebar: sidebarReducer
  },
})

export default store;