import { createSlice } from "@reduxjs/toolkit";

const directoriesSlice = createSlice({
  name: "directory",
  initialState: {
    isEditModalOpen: false,
    isNewModalOpen: false,
    isSidebarOpen: false
  },
  reducers: {
    controlEdit: (state , action) => {
      state.isEditModalOpen = !state.isEditModalOpen;
    },
    controlNew: (state , action) => {
      state.isNewModalOpen = !state.isNewModalOpen;
    },
    controlSidebar: (state , action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
  }
});

export const {controlEdit , controlNew , controlSidebar} = directoriesSlice.actions;

export default directoriesSlice.reducer;