import { createSlice } from "@reduxjs/toolkit";

const addTaskFormSlice = createSlice({
  name: "addTaskForm",
  initialState: {
    isAddTaskFormOpen : false
  },
  reducers: {
    controlAddTaskForm: (state , action) => {
      state.isAddTaskFormOpen = !state.isAddTaskFormOpen;
    }
  }
})

export const { controlAddTaskForm } = addTaskFormSlice.actions;
export default addTaskFormSlice.reducer;