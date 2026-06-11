import { configureStore } from '@reduxjs/toolkit';
import navReducer from './navSlice'; // Points to your custom createSlice file

export const store = configureStore({
  reducer: {
    navUI: navReducer, // This matches your (state: any) => state.navUI setup
  },
});

// Handy types for TypeScript compilation safety down the road
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;