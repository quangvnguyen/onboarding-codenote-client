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
  userHasAuthenticated: (isAuthenticated: boolean) => void;
  history: {
    push: (url: string) => void;
  }
}

export interface IUser {
  username: string;
  password: string;
}