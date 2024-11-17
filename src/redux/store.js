import { configureStore } from "@reduxjs/toolkit";
import directoryReducer from "./directoriesSlice";

const store = configureStore({
  reducer: {
    directory: directoryReducer,
  },
})

export default store;