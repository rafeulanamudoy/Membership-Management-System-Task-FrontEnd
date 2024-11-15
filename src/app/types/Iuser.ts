export enum ENUM_USER_ROLE {
  ADMIN = "ADMIN",
  TRAINER = "TRAINER",
  TRAINEE = "TRAINEE",
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