import { ISignUpResult } from "amazon-cognito-identity-js";

export interface ISignupStates {
  password: string;
  email: string;
  confirmPassword: string;
  confirmationCode: string;
  isLoading: boolean;
  newUser: ISignUpResult;
}

export interface ISignupProps {
  userHasAuthenticated: Function;
  history: {
    push: Function;
  }
}

export interface IUser {
  username: string;
  password: string;
}