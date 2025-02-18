import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json";
const boardSlice = createSlice({
  name: "board",
  initialState: {
    data,
  },
  reducers: {},
});
export default boardSlice.reducer;
