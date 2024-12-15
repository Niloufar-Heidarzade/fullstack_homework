import { createSlice } from "@reduxjs/toolkit";

const directoriesSlice = createSlice({
  name: "directory",
  initialState: {
    isEditModalOpen: false,
    isNewModalOpen: false,
    isSidebarOpen: false,
    isRemoveModalOpen: false,
    directories: [{id:1, name:"Main", tasks: []}],
    editingIndex: null,
  },
  reducers: {
    controlEdit: (state , action) => {
      state.isEditModalOpen = !state.isEditModalOpen;
      state.editingIndex = action.payload !== undefined ? action.payload : null;
    },
    controlNew: (state , action) => {
      state.isNewModalOpen = !state.isNewModalOpen;
    },
    controlSidebar: (state , action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    controlRemove: (state, action) => {
      state.isRemoveModalOpen = !state.isRemoveModalOpen;
    },
    addDirectory: (state, action) => {
      const newDirectory = {
        id: Date.now(), 
        name: action.payload,
        tasks: [], 
      };
      state.directories.push(newDirectory);
    },
    removeDirectory: (state, action) => {
      state.directories = state.directories.filter((_, index) => index !== action.payload);
    },
    updateDirectory: (state, action) => {
      const { index, newName } = action.payload;
      state.directories[index].name = newName;
    },
    addTaskToDirectory: (state, action) => {
      const { task, directoryId } = action.payload;
      const directory = state.directories.find(dir => dir.id === directoryId);
      if (directory) {
        directory.tasks.push(task);
      }
    },
  }
});

export const {controlEdit , controlNew , controlSidebar , controlRemove, addDirectory, removeDirectory, updateDirectory, addTaskToDirectory} = directoriesSlice.actions;

export default directoriesSlice.reducer;