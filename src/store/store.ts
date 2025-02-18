import { configureStore } from "@reduxjs/toolkit";
import boardSlice from "../store/slices/boardSlice";
const store = configureStore({
  reducer: {
    board: boardSlice,
  },
});
export { store };
export type RootState = ReturnType<typeof store.getState>;
