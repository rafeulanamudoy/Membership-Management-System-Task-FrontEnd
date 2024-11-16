import { createSlice } from "@reduxjs/toolkit";
import { IToggle } from "@/app/types/IToggle";

const initialState: IToggle = {
  toggle: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { setToggle } = toggleSlice.actions;
export default toggleSlice.reducer; // Default export of the reducer
