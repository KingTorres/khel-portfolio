import { createSlice } from "@reduxjs/toolkit";
const navSlice = createSlice({
  name: 'navUI',
  initialState: { 
    currentSection: 'intro' // Default active section
  },
  reducers: {
    setSection: (state, action) => {
      state.currentSection = action.payload;
    },
  },
});

export const { setSection } = navSlice.actions;
export default navSlice.reducer;