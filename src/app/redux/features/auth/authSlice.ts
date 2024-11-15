import { ENUM_USER_ROLE, IUser } from "@/app/types/Iuser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IUser = {
  user: {
    name: {
      firstName: "",
      lastName: "",
    },
    email: "",
    role: ENUM_USER_ROLE.DEFAULT,
  },
};

export const authSlice = createSlice({
  name: "auth", // Avoid "authReducer" to match state slice name
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload.user; // Simplified for better clarity
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer; // Export the reducer
