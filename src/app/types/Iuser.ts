export enum ENUM_USER_ROLE {
  ADMIN = "admin",
  TRAINER = "trainer",
  TRAINEE = "trainee",
  DEFAULT = "",
}
export type IUser = {
  user: {
    name: {
      firstName: string;
      lastName: string;
    };
    email: string;
    role: ENUM_USER_ROLE;
  };
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
};
export type ISignInData = {
  email: string;

  role: ENUM_USER_ROLE;

  password: string;
};
