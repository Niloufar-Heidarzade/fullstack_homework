import { createSlice } from "@reduxjs/toolkit";

const addTaskFormSlice = createSlice({
  name: "addTaskForm",
  initialState: {
    isAddTaskFormOpen : false,
    isEditTaskFormOpen: false
  },
  reducers: {
    controlAddTaskForm: (state , action) => {
      state.isAddTaskFormOpen = !state.isAddTaskFormOpen;
    },
    controlEditTaskForm: (state , action) => {
      state.isEditTaskFormOpen = !state.isEditTaskFormOpen;
    }
  }
})

export const { controlAddTaskForm , controlEditTaskForm} = addTaskFormSlice.actions;
export default addTaskFormSlice.reducer;