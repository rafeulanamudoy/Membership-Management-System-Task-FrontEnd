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
  name: "authReducer",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user.email = payload.user.email;
      state.user.role = payload.user.role;
      state.user.name = payload.user.name;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
