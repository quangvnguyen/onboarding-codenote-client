import { ISignUpResult } from 'amazon-cognito-identity-js';
import * as H from 'history';

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
  history: H.History;
}

export interface IUser {
  username: string;
  password: string;
}