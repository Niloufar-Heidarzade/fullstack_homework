import { createSlice } from "@reduxjs/toolkit";

const directoriesSlice = createSlice({
  name: "directory",
  initialState: {
    isEditModalOpen: false,
    isNewModalOpen: false,
    isSidebarOpen: false,
    isRemoveModalOpen: false
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
    },
    controlRemove: (state, action) => {
      state.isRemoveModalOpen = !state.isRemoveModalOpen;
    }
  }
});

export const {controlEdit , controlNew , controlSidebar , controlRemove} = directoriesSlice.actions;

export default directoriesSlice.reducer;