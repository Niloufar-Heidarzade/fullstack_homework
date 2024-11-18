import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarOpen: false
  },
  reducers: {
    controlSidebar: (state , action) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
  }
});

export const {controlSidebar} = sidebarSlice.actions;

export default sidebarSlice.reducer;