import { createSlice } from "@reduxjs/toolkit";

const directoriesSlice = createSlice({
  name: "directory",
  initialState: {
    isEditModalOpen: false,
    isNewModalOpen: false
  },
  reducers: {
    controlEdit: (state , action) => {
      state.isEditModalOpen = !state.isEditModalOpen;
    },
    controlNew: (state , action) => {
      state.isNewModalOpen = !state.isNewModalOpen;
    }
  }
});

export const {controlEdit , controlNew} = directoriesSlice.actions;

export default directoriesSlice.reducer;