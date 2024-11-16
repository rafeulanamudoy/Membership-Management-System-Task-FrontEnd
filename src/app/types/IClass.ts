import { ISignUpData } from "./Iuser";

export type ISchedule = {
  className: string;
  _id: string;
  trainer: ISignUpData; // Reference to Trainer model
  date: string;
  duration: number; // In minutes
  maxCapacity: number;
  trainees: string[];
  time: string; // Reference to Trainee model
  // Reference to Admin model
};
