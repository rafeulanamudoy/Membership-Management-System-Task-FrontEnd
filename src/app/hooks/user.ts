"use client";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../redux/hooks";
import { removeCookie } from "../lib/actions/cookies";
import { setUser } from "../redux/features/auth/authSlice";
import { ENUM_USER_ROLE } from "../types/Iuser";

export const useRemoveAccount = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const handleLogout = async () => {
    await removeCookie("accessToken");
    dispatch(
      setUser({
        user: {
          role: ENUM_USER_ROLE.DEFAULT,
          email: "",
        },
      })
    );
    push("/");
  };

  return handleLogout;
};
