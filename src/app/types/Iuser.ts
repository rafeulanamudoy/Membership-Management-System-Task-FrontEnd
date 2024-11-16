export enum ENUM_USER_ROLE {
  ADMIN = "admin",
  TRAINER = "trainer",
  TRAINEE = "trainee",
  DEFAULT = "",
}
export type IUser = {
  user: {
    email: string;
    role: ENUM_USER_ROLE;
  };
};
export type UserPayload = {
  email: string;
  role: ENUM_USER_ROLE;
  _id: string;
};

export type ISignUpData = {
  name: {
    firstName: string;
    lastName: string;
  };

  email: string;

  role: ENUM_USER_ROLE;

  password: string;

  confirmPassword?: string;
  secret_key?: string;
};
export type ISignInData = {
  email: string;

  role?: ENUM_USER_ROLE;

  password: string;
};
export type UserResponseData = {
  accessToken: string;
};
